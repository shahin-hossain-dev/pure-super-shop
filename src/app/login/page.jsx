"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const page = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    // Add your login logic here
    const userCredentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(userCredentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="absolute top-[8%] right-50% flex space-x-4">
        <Link href="/" className="text-blue-500 font-semibold hover:underline">
          Home
        </Link>
        <Link
          href="/login"
          className="text-black font-semibold hover:underline"
        >
          Login
        </Link>
      </div>
      <div className="container mx-auto p-4 sm:p-8 lg:p-12">
        <div className="max-w-lg mx-auto border-2 p-8 sm:p-12 rounded-lg shadow-md bg-white">
          <p className="text-4xl font-extrabold text-center mb-8 relative">
            <span className="relative inline-block text-gray-900 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
              Login
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-30 blur-lg rounded-lg"></span>
            <span className="absolute -inset-2 border-2 border-gray-300 rounded-lg opacity-40 transition-transform duration-300 transform hover:scale-110"></span>
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
            <div className="flex items-center justify-center space-x-4">
              <button className="text-2xl btn flex items-center justify-center text-green-500">
                <FaGoogle />
              </button>
              <button className="text-2xl btn flex items-center justify-center text-primary">
                <FaGithub />
              </button>
            </div>
            <p className="mt-8">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
