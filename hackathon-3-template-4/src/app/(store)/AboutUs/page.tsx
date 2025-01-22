import { shopexOffers } from "@/components/data/sample_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
            About Us
          </h1>
          <nav className="text-black lato font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">.</span>
            <Link href="/" className="hover:underline">
              Pages
            </Link>
            <span className="mx-2 text-pink-500">.</span>
            <span className="text-pink-500">About Us</span>
          </nav>
        </div>
      </section>
      <div className="lg:mx-80 md:mx-60 mx-3 my-32 ">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="flex justify-center lg:h-96 w-full">
              <Image
                src="/images/products/image-27.png"
                alt="img"
                width={1000}
                height={1000}
                className="object-contain h-full w-full"
              ></Image>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-4xl text-[#151875] font-josefin font-bold text-wrap my-8 lg:text-left md:text-left text-center">
                Know About Our Ecomerce <br /> Business, History
              </h1>
              <p className="text-[#8A8FB9] text-base font-lato lg:text-left md:text-left text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices <br /> mattis aliquam, malesuada diam est.
                Malesuada sem tristique amet erat vitae <br /> eget dolor
                lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <Link href="../contact">
                <div className="lg:justify-start md:justify-start justify-center flex">
                  <button className="bg-[#FB2E86] font-lato text-white text-base py-2 px-6 rounded-sm my-20">
                    Contact us
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="py-8 md:py-12 lg:py-16 mt-8 md:mt-12 mb-64 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] text-black font-bold font-josefin text-center mb-16 md:mb-12">
          Our Features
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
                    height: "auto",
                  }}
                />
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
      <div className="mb-64 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-josefin mb-12">
            Our Client Say!
          </h2>
          <div className="flex justify-center gap-4">
            <div className="h-16 w-16">
              <Image
                src="/images/products/profile-1.png"
                alt="img.png"
                width={1000}
                height={1000}
                className="object-contain w-full rounded h-16"
              ></Image>
            </div>
            <div className="h-16 w-16">
              <Image
                src="/images/products/profile-2.png"
                alt="img.png"
                width={1000}
                height={1000}
                className="object-contain w-full rounded h-16"
              ></Image>
            </div>
            <div className="h-16 w-16">
              <Image
                src="/images/products/profile-3.png"
                alt="img.png"
                width={1000}
                height={1000}
                className="object-contain w-full rounded h-16"
              ></Image>
            </div>
          </div>
          <h3 className="text-black font-semibold font-lato text-3xl mt-8">
            Selina Gomez
          </h3>
          <h5 className="text-[#8A8FB9] font-medium text-sm font-lato">
            Ceo At Webecy Digital
          </h5>
          <p className="text-[#8A8FB9] text-lg font-bold mt-6 font-lato mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin <br /> aliquet id arcu. Nam vitae
            a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor{" "}
            <br /> aliquam lacus volutpat praesent.
          </p>
        </div>
        <div>
          <ul className="flex justify-center gap-2">
            <li>
              <div className="border-4 border-pink-400 w-14"></div>
            </li>
            <li>
              <div className="border-4 border-pink-600 w-20"></div>
            </li>
            <li>
              <div className="border-4 border-pink-400 w-14"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
