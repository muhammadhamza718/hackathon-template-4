"use client";

import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import colors from './utils/colors';
import { ClerkLoaded, SignInButton, useUser } from "@clerk/nextjs";
import useBasketStore from "@/store/store";
import Link from "next/link";
// import { useBasketStore } from "";

const HeadingBar = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) => state.items.reduce((total,item) => total + item.quantity, 0));
  return (
    <div
      className="w-full md:max-w-[1920px] h-auto py-2 flex flex-wrap items-center justify-around font-josefin px-4 mx-auto"
      style={{
        backgroundColor: colors.violet,
        color: colors.white,
        fontWeight: 600,
        fontSize: 16,
      }}
    >
      {/* Contact Info */}
      <div className="flex flex-wrap gap-3 sm:gap-10 items-center">
        <div className="flex items-center gap-3">
          <FaRegEnvelope />
          <span>mhhasanul@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FiPhoneCall />
          <span>(12345)67890</span>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-2 sm:mt-0 flex flex-wrap items-center gap-3 sm:gap-5">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-5">
          <li className="flex items-center">
            English <RiArrowDropDownLine />
          </li>
          <li className="flex items-center">
            US <RiArrowDropDownLine />
          </li>
          <li className="flex items-center">
            <ClerkLoaded>
            {user ? (
              <div className="flex items-center space-x-2">
                <IoPersonOutline className="pl-1" />
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            </ClerkLoaded>
          </li>
          <li className="flex items-center">
            Wishlist <MdOutlineFavoriteBorder className="pl-1" />
          </li>
          <Link href={"/ShoppingCurt"} className="flex relative items-center">
            <IoCartOutline size={28} /><span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{itemCount}</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HeadingBar
