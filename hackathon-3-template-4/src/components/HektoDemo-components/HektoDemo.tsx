import Image from "next/image";
import React from "react";

export default function HektoDemo() {
  return (
    <section className="min-h-screen pt-16 pb-60 font-lato flex justify-center">
      <div>
        <div>
          <h1 className="text-2xl font-bold text-[#1D3178] mb-2 font-josefin">
            Hekto Demo
          </h1>
          <p className="text-sm text-[#1D3178] font-lato mb-8">
            Cart/ Information/ Shipping/ Payment
          </p>
        </div>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Side: Contact Information and Shipping Address */}
          <div className=" col-span-2 bg-[#F8F8FD] p-8 rounded-lg shadow">
            {/* Contact Information */}
            <div className="mb-24 mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold font-josefin text-[#1D3178] mb-4">
                  Contact Information
                </h2>
                <h2 className="font-lato text-[#C1C8E1]">
                  Already have an account? LogIn
                </h2>
              </div>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD] mb-4"
              />
              <div className="flex items-center mt-6 mb-4">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 w-4 h-4 flex items-center justify-center appearance-none bg-[#E5E0FC] checked:bg-[#19D16F] focus:ring-[#19D16F] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm rounded-sm"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
              <h2 className="text-xl font-bold font-josefin text-[#1D3178] mb-4">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD]"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD] mb-8"
              />
              <input
                type="text"
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
                className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD] mb-8"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD] mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD]"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="w-full py-3 placeholder:text-[#C1C8E1] border-b-2 border-[#C1C8E1] bg-[#F8F8FD]"
                />
              </div>
            </div>

            <button className="px-6 py-3 mt-16 bg-[#FB2E86] text-white font-josefin font-medium hover:bg-pink-600">
              Continue Shipping
            </button>
          </div>

          {/* Right Side: Cart Summary */}
          <div className="bg-white rounded-lg shadow">
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-8"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://via.placeholder.com/50"
                      alt="Product"
                      width={100}
                      height={100}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-semibold font-josefin text-[#1D3178]">
                        Ut diam consequat
                      </p>
                      <p className="text-sm text-[#C1C8E1] ">Color:Brown</p>
                      <p className="text-sm text-[#C1C8E1] ">Size:XL</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold font-josefin text-[#1D3178]">
                    $32.00
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-8 col-span-2 font-lato">
              <div className="p-6 py-8 bg-[#E8E6F1] rounded-md">
                <div className="flex justify-between mb-6 border-b-2 border-[#E8E6F1] pb-1">
                  <span className="text-[#1D3178] font-medium text-lg">
                    Subtotals:
                  </span>
                  <span className="text-[#1D3178]">£219.00</span>
                </div>
                <div className="flex justify-between mb-6 border-b-2 border-[#dedaec] pb-1">
                  <span className="text-[#1D3178] font-medium">Totals:</span>
                  <span className="text-[#1D3178] ">£325.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 flex items-center justify-center appearance-none bg-[#c8f7e0] checked:bg-[#19D16F] focus:ring-[#19D16F] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm rounded-sm"
                  />
                  <p className="text-[#8A91AB] text-sm ">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <button className="w-full bg-[#19D16F] text-white py-2 rounded-md hover:bg-[#16ab58]">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
