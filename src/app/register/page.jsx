"use client";
import SocialSignin from "@/components/sharePage/SocialSgnin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const page = () => {
  const router = useRouter();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      photo: event.target.photo.value,
      password: event.target.password.value,
    };
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/register/api`,
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (resp.status === 200) {
      // event.target.reset();
      router.push("/login");
      Swal.fire({
        icon: "success",
        title: "Congrats",
        text: "Registration Successful!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congrats",
        text: "Registration Successful!",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      {/* <div className="flex space-x-4">
        <Link href="/" className="text-black font-semibold hover:underline">
          Home
        </Link>
        <Link
          href="/register"
          className="text-blue-500 font-semibold hover:underline"
        >
          Register
        </Link>
      </div> */}

      <div className="container mx-auto p-4 sm:p-8 lg:p-12">
        <div className="max-w-lg mx-auto border-2 p-8 sm:p-12 rounded-lg shadow-md bg-white">
          <p className="text-xl font-semibold text-center mb-8 relative">
            <span className="relative inline-block text-gray-900 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
              Register
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-30 blur-lg rounded-lg"></span>
          </p>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="mt-1 w-full input input-bordered p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

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
                required
                className="mt-1 w-full input input-bordered p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-black"
              >
                Photo Url
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo Url"
                required
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
                required
                className="mt-1 w-full input input-bordered p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-black transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="mb-4">or sign up with</p>
            <SocialSignin></SocialSignin>
            <p className="mt-8">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-semibold underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
