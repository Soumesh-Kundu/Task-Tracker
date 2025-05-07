"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

export default function LoginPage(){
    async function googleLogin(){
        await signIn("google", {
            redirect: true,
            callbackUrl: "/"
        })
    }
    return (
        <main className="grid place-items-center h-dvh w-screen">
            <div className="bg-white rounded-lg shadow-md p-6 w-96 flex flex-col gap-4">
                <h1 className="w-full text-center font-medium text-lg">Login with</h1>
                <button onClick={googleLogin} className="w-full bg-slate-50 p-2 rounded-lg shadow-md flex justify-center cursor-pointer border border-slate-200"><Image src="/google.png" alt="google" width={30} height={30}/></button>
            </div>
        </main>
    )
}