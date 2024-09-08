"use client";
import { useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import {  BsGraphUp } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import { MdHomeWork } from 'react-icons/md';
import { BsFillHouseAddFill } from 'react-icons/bs'; 
import Link from 'next/link';
// import useAuth from '../../../hooks/useAuth'; 
// import Image from 'next/image';

const Sidebar = () => {
//   const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            {/* <Link href='/'>
              <Image
                src='https://i.ibb.co/4ZXzmq5/logo.png'
                alt='logo'
                width='100'
                height='100'
              />
            </Link> */}
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 pl-2 py-2 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            {/* <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link href='/'>
                <Image
                  src='https://i.ibb.co/4ZXzmq5/logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div> */}
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Menu Items */}
            <nav>
              {/* Sales Overview */}
              <Link href='/dashboard/overview'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <BsGraphUp className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Sales Overview</span>
                </p>
              </Link>

              {/*Product Management */}
              <Link href='/add-room'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <BsFillHouseAddFill className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Product Management</span>
                </p>
              </Link>

              {/* User Management */}
              <Link href='/my-listings'>
                <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
                  <MdHomeWork className='w-5 h-5' />
                  <span className='mx-4 font-medium'>User Management</span>
                </p>
              </Link>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <Link href='/dashboard/profile'>
            <p className='flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700'>
              <FcSettings className='w-5 h-5' />
              <span className='mx-4 font-medium'>Profile</span>
            </p>
          </Link>

          <button
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
