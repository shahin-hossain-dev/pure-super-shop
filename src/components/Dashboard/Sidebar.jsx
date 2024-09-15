"use client";

import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings , FcLineChart  , FcAddDatabase ,  FcBusinessman , FcComboChart } from 'react-icons/fc';
import { AiOutlineBars } from "react-icons/ai";
import Link from "next/link";
import { MdOutlinePayment } from "react-icons/md";


const Sidebar = () => {
  const [isActive, setActive] = useState(false);


  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 absolute z-10 top-0 left-0 text-gray-800 flex justify-between w-full md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link className="text-2xl font-bold text-[#3e84b9]" href="/">
              {" "}
              Pure<span className="text-[#84b93e] font-bold">Super</span>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-50 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 pl-2 py-2 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4  rounded-lg justify-center items-center  mx-auto">
              <Link className="text-2xl font-bold text-[#3e84b9]" href="/">
                {" "}
                Pure<span className="text-[#84b93e] font-bold">Super</span>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-2">
            {/* Menu Items */}
            <nav>
              {/* Sales Overview */}

              <Link href='/dashboard/overview'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <FcLineChart  className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Sales Overview</span>

                </p>
              </Link>

              {/*add product */}

              <Link href='/dashboard/additem'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <FcAddDatabase   className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Add Product</span>

                </p>
              </Link>
              {/*Product Management */}

              <Link href='/dashboard/product-management'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <FcComboChart  className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Product Management</span>

                </p>
              </Link>

              {/* User Management */}

              <Link href='/dashboard/user-management'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <FcBusinessman className='w-5 h-5' />
                  <span className='mx-4 font-medium'>User Management</span> 
                  </p>             
                </Link>
              {/* Payment */}
              <Link href="/dashboard/payments">
                <p className="flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700">
                  <MdOutlinePayment className="w-5 h-5" />
                  <span className="mx-4 font-medium">Payments</span>

                </p>
              </Link>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <Link href="/dashboard/profile">
            <p className="flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700">
              <FcSettings className="w-5 h-5" />
              <span className="mx-4 font-medium">Profile</span>
            </p>
          </Link>

          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;