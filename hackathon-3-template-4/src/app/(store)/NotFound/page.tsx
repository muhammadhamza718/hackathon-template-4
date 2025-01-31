import { logos } from "@/components/data/sample_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
            404 Not Found
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
            <span className="text-pink-500">404 Not Found</span>
          </nav>
        </div>
      </section>
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex justify-center items-center py-6">
            <Image
              src={"/images/products/NotFound.png"}
              alt="404 Not Found"
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#FB2E86] text-white font-josefin text-sm py-3 px-6 rounded-sm mb-16 hover:cursor-pointer">
            <Link href="/">Back To Home</Link>
          </div>
        </div>
        <section className="py-8 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center flex-wrap gap-6">
              {logos.map((logo, index) => (
                <div key={index} className="w-full flex justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={1000}
                    height={1000}
                    className="h-auto w-auto"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
