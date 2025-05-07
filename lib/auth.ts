import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";

declare module "next-auth" {
  interface Session {
      user: {
          id: string;
          email: string;
          name: string;
          image: string;
      };
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET!,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      async profile(profile) {
        let user=await db.users.findFirst({where:{email:profile.email},select:{id:true}});
        if(!user){
          user=await db.users.create({
            data:{
              email:profile.email,
              name:profile.name,
              image:profile.picture,
            },
            select:{id:true}
          })
        }
        else{
          user=await db.users.update({where:{id:user.id},data:{image:profile.picture},select:{id:true}});
        }
        const result={
          id: `${user?.id}`,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
        return result ;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id:user.id,
          username: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id:token?.id,
            name: token.name,
          },
        };
      }
      return session;
    },
  },
};


export async function getServerUser(){
  return getServerSession(authOptions)
}