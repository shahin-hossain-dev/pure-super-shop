"use client";
import Link from "next/link";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import SocialSignin from "@/components/sharePage/SocialSgnin";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      // callbackUrl: path ? path : "/",
    });
    if (res.status === 200) {
      // event.target.reset();
      // console.log('successful')
      router.push('/')
    }
    else{
      console.log('error')
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black ">
      <div className="flex space-x-4">
        <Link href="/" className="text-black font-semibold hover:underline">
          Home
        </Link>
        <Link
          href="/login"
          className="text-blue-500 font-semibold hover:underline"
        >
          Login
        </Link>
      </div>
      <div className="container mx-auto p-4 sm:p-8 lg:p-12">
        <div className="max-w-lg mx-auto border-2 p-8 sm:p-12 rounded-lg shadow-md bg-white">
          <p className="text-xl font-semibold text-center mb-8 relative">
            <span className="relative inline-block text-gray-900 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
              Login
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-30 blur-lg rounded-lg"></span>
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 w-full input input-bordered p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="mt-1 w-full input input-bordered p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-black transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="mb-4">or sign in with</p>
            <SocialSignin></SocialSignin>
            <p className="mt-8">
              Do not have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-semibold underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
