"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ring } from "ldrs/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "ldrs/react/Ring.css";
const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email address",
    })
    .min(0),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function googleLogin() {
    await signIn("google", { redirect: true, callbackUrl: "/" });
  }
  async function onLoginSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.ok) {
      router.push("/");
      return;
    }
    setIsLoading(false);
    if (signInData?.status === 401) {
      toast("Invalid Email or Password");
      return;
    }
    if (signInData?.status === 500) {
      toast("Oops!", {
        description: "Something wrong happend!",
      });
      return;
    }
  }
  return (
    <main className="grid place-items-center h-dvh w-screen ">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 flex flex-col gap-4">
        <h1 className="md:text-3xl text-2xl font-extrabold leading-tight tracking-wide text-gray-900 dark:text-white mb-4">
          Welcome back
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onLoginSubmit)}
            className="flex flex-col "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-3 mt-4">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <p className="text-sm mb-3 font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet ?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-black hover:underline dark:text-blue-500"
              >
                Sign up
              </Link>
            </p>
            <Button type="submit" className="!bg-ui-600 !text-white">
              {isLoading ? (
                <Ring size={20} color="white" stroke={1.5} />
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </Form>
        <div className="flex w-full items-center ">
          <p className="border-t w-full"></p>
          <p className="px-4">or</p>
          <p className="border-t w-full"></p>
        </div>
        <div className="grid grid-cols-3 gap-2  ">
          <Button
            variant="secondary"
            className="col-span-3 border-gray-300 border !rounded-md"
            onClick={googleLogin}
            type="button"
          >
            <Image
              src="/google.png"
              alt="Google Logo"
              width={24}
              height={24}
              priority
            />
          </Button>
        </div>
      </div>
    </main>
  );
}
