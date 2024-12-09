import React from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import colors from '../../utils/constants/colors'

const HeadingBar = () => {
  return (
    <div className='max-w-[1920px] h-[44px] flex items-center justify-around font-josefin mx-auto' style={{
        backgroundColor: colors.violet,
        color: colors.white,
        fontWeight: 600,
        fontSize: 16,
      }}>
      
      <div className='flex gap-10'>
        <div className='flex items-center gap-3'>
            <FaRegEnvelope />
            <div><span>mhhasanul@gmail.com</span></div>
        </div>
        <div className='flex items-center gap-3'>
            <FiPhoneCall />
            <div><span>(12345)67890</span></div>
        </div>
      </div>

      <div>
  <ul className="flex items-center gap-3">
    <li className="flex items-center">
      English <RiArrowDropDownLine  />
    </li>
    <li className="flex items-center">
      UUS <RiArrowDropDownLine  />
    </li>
    <li className="flex items-center ">
      Login <IoPersonOutline  className='ps-1' />
    </li>
    <li className="flex items-center">
      Wishlist <MdOutlineFavoriteBorder  className='ps-1' />
    </li>
    <li className="flex items-center ms-5">
      <IoCartOutline size={28} />
    </li>
  </ul>
</div>

    </div>
  )
}

export default HeadingBar