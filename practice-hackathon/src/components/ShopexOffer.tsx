import React from "react";
import Image from "next/image";
import { shopexOffers } from "./data/sample_data";

export function ShopexOffer() {
  return (
    <section className="py-8 md:py-12 lg:py-16 mt-8 md:mt-12">
      <h2 className="text-3xl md:text-4xl lg:text-[42px] text-[#1A0B5B] font-josefin text-center mb-8 md:mb-12">
        What Shopex Offer!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {shopexOffers.map((offer, index) => (
          <div
            key={index}
            className="w-full max-w-[270px] p-6 flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="mb-6">
              <Image
                src={offer.image}
                width={65}
                height={65}
                alt={offer.title}
                className="object-contain"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl md:text-2xl font-josefin text-[#151875]">
                {offer.title}
              </h3>
              <p className="text-sm md:text-base text-[#1A0B5B4D]">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
