"use client";
import { Check } from "lucide-react";
import { ProductTabs } from "./ProductTabs";
import { useState } from "react";
import Productimage from "./image";

export const DiscountItem = () => {
  const tabs = ["Wood Chair", "Plastic Chair", "Sofa Collection"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full mx-auto relative mb-16 p-4">
      {/* Heading */}
      <h2 className="font-josefin font-bold text-3xl sm:text-4xl text-center mb-10 sm:mb-6">
        Discount Item
      </h2>

      {/* Tabs */}
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-8">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h2 className="font-josefin text-[#151875] text-3xl sm:text-4xl mb-10">
            20% Discount Of All Products
          </h2>
          <span className="font-josefin text-[#FB2E86] text-xl sm:text-2xl">
            Eams Sofa Compact
          </span>

          <div className="flex flex-col sm:flex-row gap-8 pt-8">
            {/* First Column */}
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-3">
                <Check className="text-green-500" /> Material expose like metals
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-green-500" /> Simple neutral colours
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-3">
                <Check className="text-green-500" /> Clear lines and geometric
                figures
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-green-500" /> Material expose like metals
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="absolute inset-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#ECD2FA59] rounded-full -z-10"></div>
          <Productimage />
        </div>
      </div>
    </div>
  );
};
