import colors from "./utils/colors";
import React from "react";
import SearchField from "./SearchField";

const Footer = () => {
  return (
    <div
      className="w-full min-h-[479px] py-8 md:py-12 lg:h-[479px] flex items-center justify-around font-lato mx-auto"
      style={{
        backgroundColor: colors.skyBlue,
        color: colors.subTextColor,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 lg:px-0">
        {/* Hekto Section */}
        <div className="w-full md:w-auto max-w-sm mx-auto md:mx-0">
          <div className="font-josefin text-2xl md:text-[38px] pb-4 md:pb-5 text-black text-center md:text-left">
            <span>Hekto</span>
          </div>

          <div className="pb-4 md:pb-5">
            <SearchField />
          </div>

          <div className="flex flex-col text-sm md:text-[16px] text-center md:text-left space-y-2">
            <span>Contact Info</span>
            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
          </div>
        </div>

        {/* Categories Section */}
        <div className="w-full md:w-auto">
          <div className="font-josefin text-xl md:text-[22px] pb-4 md:pb-5 text-black text-center md:text-left">
            <span>Catagories</span>
          </div>

          <div className="flex flex-col text-sm md:text-[16px] gap-y-3 md:gap-y-5 cursor-pointer text-center md:text-left">
            <span>Laptops & Computers</span>
            <span>Cameras & Photography</span>
            <span>Smart Phones & Tablets</span>
            <span>Video Games & Consoles</span>
            <span>Waterproof Headphones</span>
          </div>
        </div>

        {/* Customer Care Section */}
        <div className="w-full md:w-auto">
          <div className="font-josefin text-xl md:text-[22px] pb-4 md:pb-5 text-black text-center md:text-left">
            <span>Customer Care</span>
          </div>

          <div className="flex flex-col text-sm md:text-[16px] gap-y-3 md:gap-y-5 cursor-pointer text-center md:text-left">
            <span>My Account</span>
            <span>Discount</span>
            <span>Returns</span>
            <span>Orders History</span>
            <span>Order Tracking</span>
          </div>
        </div>

        {/* Pages Section */}
        <div className="w-full md:w-auto">
          <div className="font-josefin text-xl md:text-[22px] pb-4 md:pb-5 text-black text-center md:text-left">
            <span>Pages</span>
          </div>

          <div className="flex flex-col text-sm md:text-[16px] gap-y-3 md:gap-y-5 cursor-pointer text-center md:text-left">
            <span>Blog</span>
            <span>Browse the Shop</span>
            <span>Category</span>
            <span>Pre-Built Pages</span>
            <span>Visual Composer Elements</span>
            <span>WooCommerce Pages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
