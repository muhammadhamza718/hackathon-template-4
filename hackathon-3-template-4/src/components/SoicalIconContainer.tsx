import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social icons

const SocialIconContainers = () => {
  return (
    <div className="flex gap-2 ">
      {/* Facebook Icon Container */}
      <div className="w-10 h-10   bg-[#151875] rounded-full flex items-center justify-center cursor-pointer">
        <FaFacebookF className="text-white text-[14px]" />
      </div>
      
      {/* Instagram Icon Container */}
      <div className="w-10 h-10   bg-[#151875] rounded-full flex items-center justify-center cursor-pointer">
        <FaInstagram className="text-white text-[14px]" />
      </div>
      
      {/* Twitter Icon Container */}
      <div className="w-10 h-10   bg-[#151875] rounded-full flex items-center justify-center cursor-pointer">
        <FaTwitter className="text-white text-[14px]" />
      </div>
    </div>
  );
};

export default SocialIconContainers;
