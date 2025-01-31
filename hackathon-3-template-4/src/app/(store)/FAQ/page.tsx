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
            FAQ
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
            <span className="text-pink-500">FAQ</span>
          </nav>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 w-screen px-8 sm:px-16 lg:px-28 mt-32 mb-16">
          {/* FAQ Section */}
          <div className="col-span-1">
            <h1 className="text-4xl font-bold font-josefin text-[#1D3178] mb-10">
              General Information
            </h1>
            <div>
              <h4 className="font-bold font-josefin text-[#1D3178] mb-6 mt-10">
                Eu dictumst cum at sed euismood condimentum?
              </h4>
              <p className="font-josefin text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed <br /> tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div>
              <h4 className="font-bold font-josefin text-[#1D3178] mb-6 mt-10">
                Magna bibendum est fermentum eros.
              </h4>
              <p className="font-josefin text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed <br /> tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div>
              <h4 className="font-bold font-josefin text-[#1D3178] mb-6 mt-10">
                Odio muskana hak eris conseekin sceleton?
              </h4>
              <p className="font-josefin text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed <br /> tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div>
              <h4 className="font-bold font-josefin text-[#1D3178] mb-6 mt-10">
                Elit id blandit sabara boi velit gua mara?
              </h4>
              <p className="font-josefin text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed <br /> tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-span-1">
            <div className="bg-[#F8F8FD] text-2xl font-bold py-16 px-6 sm:px-12">
              <h1 className="mb-8 font-josefin text-[#1D3178]">
                Ask a Question
              </h1>
              <form className="text-sm font-normal">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control py-4 px-2 border border-[#CDCEDC] placeholder:text-[#8990B1] placeholder:text-base placeholder:font-lato rounded-md w-full"
                    id="faq_name"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control py-4 px-2 border border-[#CDCEDC] placeholder:text-[#8990B1] placeholder:text-base placeholder:font-lato rounded-md w-full"
                    id="faq_subject"
                    placeholder="Subject *"
                    required
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="form-control py-4 px-2 border border-[#CDCEDC] placeholder:text-[#8990B1] placeholder:text-base placeholder:font-lato rounded-md w-full"
                    id="faq_message"
                    placeholder="Type Your Message *"
                    rows={10}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    className="form-control py-3 px-6 border rounded-md items-center font-josefin text-sm text-white bg-[#FB2E86] w-full sm:w-32 hover:bg-pink-600 hover:cursor-pointer"
                    value={"Send Mail"}
                    required
                  />
                </div>
              </form>
            </div>
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
      </section>
    </>
  );
}
