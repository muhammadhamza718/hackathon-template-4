import Image from "next/image";
import React from "react";

export default function ProductDetail() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16">
        {/* Product Card */}
        <div className="shadow-2xl rounded-lg py-8">
          {/* Product Card */}
          <div className="bg-white flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 w-[40%] justify-items-center">
              <div className="flex flex-col justify-between col-span-2">
                {[
                  "/images/products/Detail-image-2.png",
                  "/images/products/Detail-image-3.png",
                  "/images/products/Detail-image-4.png",
                ].map((imageSrc, index) => (
                  <Image
                    key={index}
                    src={imageSrc}
                    width={1000}
                    height={1000}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-28 object-contain border rounded-md cursor-pointer hover:shadow-md"
                  />
                ))}
              </div>
              <div className="col-span-3 md:col-span-4 col-start-3">
                <Image
                  src="/images/products/Detail-image-1.png"
                  width={1000}
                  height={1000}
                  alt="Product"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col josefin justify-center gap-3">
              <h1 className="text-3xl font-bold  text-[#0D134E]">
                Playwood Arm Chair
              </h1>
              <div className="flex">
                <Image
                  src="/images/products/five-star.png"
                  alt="Rating"
                  width={110}
                  height={110}
                />
                <h1 className="ml-2 text-[#151875]">(22)</h1>
              </div>
              <div className="text-[#151875] text-lg font-semibold">
                $32.00{" "}
                <span className="text-[#FB2E86] line-through">$32.00</span>
              </div>
              <div className="">
                <span className="block text-[#0D134E] font-semibold">
                  Color
                </span>
              </div>
              <p className="text-[#A9ACC6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus <br /> porttitor purus, et volutpat sit.
              </p>
              <div className="flex gap-1">
                <button className="px-4 py-1 w-40 bg-white text-[#151875] rounded-md shadow-md hover:bg-[#EBF4F3]">
                  Add to Cart
                </button>
                <Image
                  src="/images/products/heart-1.png"
                  alt="Heart"
                  width={35}
                  height={35}
                />
              </div>
              <div className="">
                <p className="text-[#151875] font-semibold text-lg">
                  Categories:
                </p>
                <p className="text-[#151875]  font-semibold text-lg mt-1">
                  Tags:
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#151875] font-semibold text-lg mt-1">
                    Store:
                  </p>
                  <Image
                    src="/images/products/share-2.png"
                    alt="Share"
                    width={100}
                    height={100}
                    className="h-4 w-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F8FE]">
        <div className="mt-8 max-w-7xl mx-auto px-6 py-24">
          {/* Tabs */}
          <div className="flex gap-6 border-b pb-2">
            {["Description", "Additional Info", "Reviews", "Video"].map(
              (tab) => (
                <button
                  key={tab}
                  className="text-[#151875] font-bold josefin text-xl hover:text-blue-600 border-b-2 border-transparent hover:underline hover:underline-offset-4"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          <div className="mt-6 josefin">
            <h2 className="text-xl font-bold text-[#151875]">Various tempor</h2>
            <p className="text-[#A9ACC6] mt-2">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>

            <h3 className="text-xl font-bold text-[#151875] mt-6">
              More details
            </h3>
            <ul className="list-none mt-4 space-y-2">
              {[...Array(4)].map((_, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[#A9ACC6]"
                >
                  <span className="text-[#2F1AC4] text-xl">
                    <Image
                      src="/images/products/right-arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl josefin mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-[#151875] mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "Mens Fashion Wear",
              price: "$43.00",
              image: "/images/products/mens-fashion-wear.png",
              rating: 5,
            },
            {
              title: "Women's Fashion",
              price: "$67.00",
              image: "/images/products/women-fashion.png",
              rating: 5,
            },
            {
              title: "Wolx Dummy Fashion",
              price: "$67.00",
              image: "/images/products/wolx-dummy-fashion.png",
              rating: 5,
            },
            {
              title: "Top Wall Digital Clock",
              price: "$51.00",
              image: "/images/products/top-wall-digital-clock.png",
              rating: 3,
            },
          ].map((product, index) => (
            <div key={index} className="justify-center flex items-start flex-col gap-2">
              <Image
                src={product.image}
                width={1000}
                height={1000}
                alt={product.title}
                className="w-auto h-auto object-contain rounded"
              />
              <div className="flex justify-between w-full">
                <h3 className="text-md font-semibold text-[#151875]">
                  {product.title}
                </h3>
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-yellow-400 ${
                        starIndex >= product.rating ? "text-gray-300" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[#151875] font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
