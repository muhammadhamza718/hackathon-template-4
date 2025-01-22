"use client";
import React, { useState } from 'react';
import SearchField from './SearchField';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';

const Navbar = () => {
  // State for dropdown visibility
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <div className="w-full md:max-w-[1920px] h-auto flex flex-wrap items-center justify-around font-lato mx-auto px-4 my-5">
      {/* Brand */}
      <div className="font-josefin text-[28px] sm:text-[34px] font-bold mb-4 sm:mb-0">
        <span onClick={() => window.location.href = '/'} className="hover:cursor-pointer">Hekto</span>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-5 sm:gap-10">
          <li className="flex items-center relative group text-[#FB2E86]">
            <Link href="/">Home</Link>
            <RiArrowDropDownLine size={20} />
          </li>

          {/* Pages link with dropdown */}
          <li 
            className="relative group" 
            onMouseEnter={() => setIsPagesDropdownOpen(true)} 
            onMouseLeave={() => setIsPagesDropdownOpen(false)}
          >
            <div className="flex items-center cursor-pointer">
              <ul>
                <li>Pages</li>
              </ul>
              {isPagesDropdownOpen && <RiArrowDropDownLine size={20} />}
            </div>

            {/* Dropdown Menu */}
            {isPagesDropdownOpen && (
              <ul className="absolute left-0 top-4 mt-2 w-40 bg-white shadow-lg lato rounded-md z-10">
                <li className="hover:bg-gray-100">
                  <Link href="/GridPage" className="block px-4 py-2">Shop Grid Default</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/ShopList" className="block px-4 py-2">Shop List</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/ShopLeftSideBar" className="block px-4 py-2">Shop Left Sidebar</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/ProductDetail" className="block px-4 py-2">Product Details</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/ShoppingCurt" className="block px-4 py-2">shopping curt</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/OrderCompleted" className="block px-4 py-2">Order Completed</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/HektoDemo" className="block px-4 py-2">Hekto Demo</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Login" className="block px-4 py-2">My Account</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Blog" className="block px-4 py-2">Blog Page</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/blogs" className="block px-4 py-2">Single Blog</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/AboutUs" className="block px-4 py-2">About Us</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/ContactUs" className="block px-4 py-2">Contact us</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/NotFound" className="block px-4 py-2">404 Not Found</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/FAQ" className="block px-4 py-2">Faq</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Search Field */}
      <div className="w-full sm:w-auto mt-3 sm:mt-0">
        <SearchField />
      </div>
    </div>
  );
};

export default Navbar;
