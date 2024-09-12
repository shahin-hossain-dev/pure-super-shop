"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const activeRoute = usePathname();
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/products",
      title: "Products",
    },

    {
      path: "/contact",
      title: "Contact",
    },
  ];

  
  if (activeRoute.includes("dashboard")) return;

  return (
    <nav className="flex border-b py-4 max-w-[1440px] w-[95%] md:w-11/12 mx-auto font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        <Link className="text-2xl font-bold text-[#3e84b9]" href="/">
          Pure<span className="text-[#84b93e] font-bold">Super</span>
        </Link>
        <div
          id="collapseMenu"
          className={`lg:ml-10 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            onClick={toggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>
          <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 text-center">
            {/* Mobile Menu Items */}
            {navItems?.map((item) => (
              <li key="title">
                <Link
                  className={
                    item?.path === activeRoute
                      ? "font-bold pb-2 !text-[#000] react-tabs__tab "
                      : "react-tabs__tab"
                  }
                  href={item?.path}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
            {/* Add menu items here */}
            {/* Mobile specific links */}
            {/* Do not delete these comments below*/}
            {/* <li>
              {session?.status === "unauthenticated" && (
                <Link
                  href="/login"
                  className="px-4 py-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              {" "}
              {session?.status === "authenticated" && (
                <button
                  className="px-4 py-2 bg-[#ff1111] text-white rounded hover:bg-blue-600"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              )}
            </li>
            <li>
              {session?.status === "unauthenticated" && (
                <Link
                  href="/register"
                  className="px-4 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600"
                >
                  Register
                </Link>
              )}
            </li> */}
            <li>
              <Link
                href="/wishlist"
                className="px-4 py-2 bg-white text-[#3e84b9] rounded border font-medium border-[#3e84b9] flex items-center justify-center lg:hidden"
              >
                <CiHeart className="mr-2" /> Wishlist
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-6 gap-y-4 ml-auto items-center">
          {/* Additional Navbar content for larger screens */}
          {session?.status === "unauthenticated" && (
            <Link
              href="/login"
              className="px-4 py-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}
          {session?.status === "authenticated" && (
            // <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="relative">
              <div
                className="tool w-10 rounded-full cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={
                    session?.data?.user?.photo ||
                    "https://i.ibb.co/sjymvr8/Capture4.png"
                  }
                  alt="User profile"
                />
              </div>

              {showInfo && (
                <div className="absolute mt-2 bg-white p-2 rounded shadow-lg">
                  <p className="text-sm font-semibold">
                    {session?.data?.user?.name || "User Name"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {session?.data?.user?.email || "user@example.com"}
                  </p>
                </div>
              )}
            </div>
            // </label>
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
            className="px-4 py-2 bg-white text-[#3e84b9] rounded border font-medium border-[#3e84b9]  items-center hidden lg:flex"
          >
            <CiHeart className="mr-2" /> Wishlist
          </Link>
          <button id="toggleOpen" onClick={toggleMenu} className="lg:hidden">
            {/* Open Menu Icon */}
            <svg
              className="w-7 h-7"
              fill="#333"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
