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
      <div className="container mx-auto p-4 sm:p-8 lg:p-12">
        <div className="max-w-lg mx-auto border-2 p-8 sm:p-12 rounded-lg shadow-md bg-white">
          <p className="text-3xl font-semibold text-primary text-center mb-8">
            Sign In
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
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
              <label htmlFor="password" className="block text-sm font-medium text-black">
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
