"use client";

import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { HiX } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  console.log(session?.data?.user?.email);
  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#3e84b9]">
            <Link href="/">
              Pure<span className="text-[#84b93e] font-bold">Super</span>
            </Link>
          </div>

          {/* Search bar and categories */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#3e84b9]"
              />
              {/* <select className="px-4 py-2 border rounded-r-lg bg-gray-100 focus:outline-none">
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="groceries">Groceries</option>
                <option value="home-appliances">Home Appliances</option>
              </select> */}
              <button className="px-4 py-3 bg-[#3e84b9] text-white rounded-r-lg hover:bg-blue-600  items-center">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {session?.status === "unauthenticated" && (
              <Link
                href="/login"
                className="px-4 py-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
              >
                Login
              </Link>
            )}
            {session?.status === "authenticated" && (
              <button
                className="px-4 py-2 bg-[#ff1111] text-white rounded hover:bg-blue-600"
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
            {session?.status === "unauthenticated" && (
              <Link
                href="/register"
                className="px-4 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600"
              >
                Register
              </Link>
            )}

            <Link
              href="/wishlist"
              className="px-4 py-2 bg-white text-[#3e84b9] rounded  border font-medium border-[#3e84b9] flex items-center"
            >
              <CiHeart className="mr-2" /> Wishlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="w-8 h-8" />
              ) : (
                <HiMenuAlt4 className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* <select className="px-4 py-2 border rounded-r-lg bg-gray-100 focus:outline-none">
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="groceries">Groceries</option>
                  <option value="home-appliances">Home Appliances</option>
                </select> */}
                <button className="px-4 py-3 bg-[#3e84b9] text-white rounded-r-lg hover:bg-blue-600  items-center">
                  <CiSearch />
                </button>
              </div>
              <Link
                href="/login"
                className="px-4 py-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600"
              >
                Register
              </Link>
              <Link
                href="/wishlist"
                className="px-4 py-2 bg-white text-[#3e84b9] rounded  border font-medium border-[#3e84b9] flex items-center"
              >
                <CiHeart className="mr-2" /> Wishlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
