import React from "react";
import Image from "next/image";

export default function SubscribeSection() {
  return (
    <section className="relative w-full hidden lg:block h-[400px] sm:h-[500px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/products/background-image.png"
          alt="Background"
          width={1920}
          height={1080}
          className="object-contain xl:object-cover mx-auto w-full h-full"
          priority
          />
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-[#151875] font-josefin text-2xl sm:text-3xl font-extrabold mb-6">
          Get Latest Update By Subscribe <br /> Our Newslater
        </h2>

        <button className="bg-[#FB2E86] text-white font-josefin font-medium px-8 py-2 rounded-sm hover:bg-[#D12470] transition-all">
          Shop Now
        </button>
      </div>
    </section>
  );
}
