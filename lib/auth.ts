import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
import { compare } from "bcryptjs";

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
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await db.users.findFirst({
          where: { email: credentials.email },
        });
        if (!user || !user?.password) {
          return null;
        }
        const verfied = await compare(credentials.password, user.password);
        if (!verfied) {
          return null;
        }
        return {
          id: `${user.id}`,
          email: user.email,
          image: user?.image,
        };
      },
    }),
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