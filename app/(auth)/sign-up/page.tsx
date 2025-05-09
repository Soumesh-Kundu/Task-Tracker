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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { registerUser } from "@/lib/api/auth";
import "ldrs/react/Ring.css"
const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({
        message: "Invalid email address",
      })
      ,
    password: z.string().min(1, { message: "Password is required" }).min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
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
  async function onSignupSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { success, message } = await registerUser(values);
      if (success === 409) {
        toast(message);
      }
      if (success === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      toast("Some error occured!", {
        description: "Please try again later",
      });
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  }
  return (
    <main className="grid place-items-center h-dvh w-screen ">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 flex flex-col gap-4">
        <h1 className="md:text-3xl text-2xl font-extrabold leading-tight tracking-wide text-gray-900 dark:text-white mb-2">
          Get Started
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSignupSubmit)}
            className="flex flex-col "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-3">
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
                <FormItem className="mb-3">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="*******"
                        type={showPassword ? "text" : "password"}
                        className="!pr-10"
                        {...field}
                      />
                      <button
                        className="absolute duration-200 text-ui-600 right-2 top-2"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="*******"
                        type={showConfirmPassword ? "text" : "password"}
                        className="!pr-10"
                        {...field}
                      />
                      <button
                        className="absolute duration-200 text-ui-600 right-2 top-2"
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      >
                        {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-sm mb-2 mt-1 font-light text-gray-500 dark:text-gray-400">
              Already have an account ?{" "}
              <Link
                href="/login"
                className="font-medium text-black hover:underline dark:text-blue-500"
              >
                Log In
              </Link>
            </p>
            <Button type="submit" className="!bg-ui-600 !text-white">
              {isLoading ? (
                <Ring size={20} color="white" stroke={1.5} />
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
        <div className="flex w-full items-center">
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
