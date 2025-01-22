"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RightSideListedproducts as initialProducts } from "../data/sample_data";
import { FaSearch } from "react-icons/fa";

export default function LeftSideBar() {
  const [sortOption, setSortOption] = useState("Best Match");
  const [perPage, setPerPage] = useState(7);
  const [view, setView] = useState("grid");

  // Sorting logic
  const sortedProducts = [...initialProducts].sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return (
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
        );
      case "Price: High to Low":
        return (
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
        );
      case "Newest First":
        return b.id - a.id;
      default:
        return 0;
    }
  });
  return (
    <section className="w-full bg-white py-4 mb-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-24 pt-24">
        {/* Sorting and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex flex-col mb-4 lg:mb-0">
            <h2 className="josefin text-2xl font-bold text-[#151875] mr-4">
              Ecommerce Accessories & Fashion Item
            </h2>
            <span className="lato text-[#8A8FB9] text-sm">
              About 9,620 results (0.62 seconds)
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Per Page Input */}
            <div className="flex items-center">
              <label
                htmlFor="perPage"
                className="text-[#3F509E] mr-2 font-medium"
              >
                Per Page:
              </label>
              <input
                id="perPage"
                type="number"
                className="w-16 border border-[#E7E6EF] text-[#8A8FB9] rounded p-1 focus:outline-none"
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                min={1}
                max={initialProducts.length}
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center">
              <label
                htmlFor="sortBy"
                className="text-[#3F509E] mr-2 font-medium"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="border border-[#E7E6EF] text-[#8A8FB9] rounded p-2 focus:outline-none"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex items-center">
              <span className="text-[#3F509E] mr-2 font-medium">View:</span>
              <button
                className={`mr-2 ${view === "grid" ? "text-blue-500" : ""}`}
                onClick={() => setView("grid")}
              >
                <Image
                  src="/images/products/grid-view.png"
                  alt="Grid View"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </button>
              <button
                className={`${view === "list" ? "text-blue-500" : ""}`}
                onClick={() => setView("list")}
              >
                <Image
                  src="/images/products/solid-list.png"
                  alt="List View"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid with Pagination */}
        <div className="flex w-full justify-between">
          <div className="w-1/4">
            {/* Product Brand */}
            <div className="mb-6">
              <h3 className="font-bold text-[#151875] text-lg border-b-2 border-black pb-1 josefin w-[52%]">
                Product Brand
              </h3>
              <ul className="mt-4">
                {[
                  "Coaster Furniture",
                  "Fusion Dot High Fashion",
                  "Unique Furnitures Restor",
                  "Dream Furnitures Studio",
                  "Young Repurposed",
                  "Green DIY Initiative",
                ].map((brand, index) => (
                  <li key={index} className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border border-[#B2B2B2] bg-[#E5E0FC] checked:bg-[#603EFF] focus:ring-[#603EFF] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm flex items-center justify-center"
                    />

                    <span className="text-[#7E81A2] lato text-base">
                      {brand}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discount Offer */}
            <div className="mb-6">
              <h3 className="font-bold text-[#151875] text-lg border-b-2 border-black pb-1 josefin w-[52%]">
                Discount Offer
              </h3>
              <ul className="mt-4">
                {[
                  "20% Cashback",
                  "5% Cashback Offer",
                  "25% Discount Offer",
                ].map((offer, index) => (
                  <li key={index} className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border border-[#B2B2B2] bg-[#FFDBF1] checked:bg-[#FF3EB2] focus:ring-[#FF3EB2] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm flex items-center justify-center"
                    />
                    <span className="text-[#7E81A2] lato text-base">
                      {offer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating Item */}
            <div className="mb-6">
              <h3 className="font-bold text-[#151875] text-lg border-b-2 border-black pb-1 josefin w-[41%]">
                Rating Item
              </h3>
              <ul className="mt-4 josefin">
                {[
                  "⭐⭐⭐⭐ (2341)",
                  "⭐⭐⭐ (1726)",
                  "⭐⭐ (258)",
                  "⭐ (25)",
                ].map((rating, index) => (
                  <li key={index} className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border border-[#B2B2B2] bg-[#FFF6DA] checked:bg-[#FFCC2E] focus:ring-[#FFCC2E] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm flex items-center justify-center"
                    />
                    <span className="text-black text-base">{rating}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-bold text-[#151875] text-lg border-b-2 border-black pb-1 josefin w-[39%]">
                Categories
              </h3>
              <ul className="mt-4">
                {[
                  "Prestashop",
                  "Magento",
                  "Bigcommerce",
                  "osCommerce",
                  "OpenCart",
                  "Accessories",
                  "Jewelry",
                  "Watches",
                ].map((category, index) => (
                  <li key={index} className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border border-[#B2B2B2] bg-[#FFDBF1] checked:bg-[#FF3EB2] focus:ring-[#FF3EB2] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm flex items-center justify-center"
                    />
                    <span className="text-[#7E81A2] lato text-base">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-[#151875] text-lg border-b-2 border-black pb-1 josefin w-[39%]">
                Price Filter
              </h3>
              <ul className="mt-4">
                {[
                  "$10.00 - $150.00",
                  "$150.00 - $350.00",
                  "$150.00 - $504.00",
                  "$450.00 - $600.00",
                ].map((price, index) => (
                  <li key={index} className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border border-[#B2B2B2] bg-[#FFDBF1] checked:bg-[#FF3EB2] focus:ring-[#FF3EB2] checked:before:content-['✔'] checked:before:text-white checked:before:text-sm flex items-center justify-center"
                    />
                    <span className="text-[#7E81A2] lato text-base">
                      {price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="relative">
                <input
                  type="text"
                  placeholder="$10.00 - 20000$"
                  className="w-full mt-4 border-2 border-[#BCBDDB] text-[#989BB5] rounded p-2 focus:outline-none placeholder:text-[#151875] placeholder:opacity-10"
                />
                <span className="absolute right-2 top-6 text-[#151875]">
                  <FaSearch size={30} />
                </span>
              </div>
            </div>

            {/* Filter By Color */}
            <div>
              <h3 className="font-bold text-[#151875] text-lg border-b-2 border-black pb-1 josefin w-[52%]">
                Filter By Color
              </h3>
              <ul className="grid grid-rows-2 grid-cols-3 gap-4 mt-4">
                {[
                  { color: "#5E37FF", name: "Blue" },
                  { color: "#FF9437", name: "Orange" },
                  { color: "#FFBF95", name: "Brown" },
                  { color: "#33D221", name: "Green" },
                  { color: "#E248FF", name: "Purple" },
                  { color: "#26CBFF", name: "Sky" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center cursor-pointer">
                    <div
                      className="w-5 h-5 rounded-full border border-[#B2B2B2]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-[#7E81A2] ml-2 lato text-base">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`grid ${
              view === "grid"
                ? "grid-cols-1 gap-6 w-[72%]"
                : "grid-cols-1 gap-4 w-full"
            }`}
          >
            {sortedProducts.slice(0, perPage).map((product) => (
              <div
                key={product.id}
                className="group flex flex-col lg:flex-row justify-start items-start bg-white overflow-hidden p-4 gap-6 hover:bg-[#EBF4F3]"
              >
                <div className="relative w-full lg:w-1/3 h-52">
                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-contain rounded-lg"
                    fill
                    sizes="100vw"
                  />
                </div>

                {/* Product details */}
                <div className="flex flex-col justify-center w-full h-full lg:w-2/3 gap-2">
                  <div className="flex justify-start items-center">
                    <h3 className="josefin font-semibold text-[#151875] text-base w-[30%]">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 my-2">
                      <div className="h-3 w-3 rounded-full bg-[#DE9034]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#EC42A2]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#8568FF]"></div>
                    </div>
                  </div>
                  <div className="josefin flex justify-start items-center text-base gap-2">
                    <span className="text-[#151875] font-bold">
                      {product.price}
                    </span>
                    <span className="text-[#FB2E86] line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                  <p className="text-[#8A8FB9] text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est <br /> adipiscing in phasellus non in justo.
                  </p>
                  <div className="flex gap-4">
                    <button className="p-2 bg-transparent rounded-full hover:bg-white">
                      <Image
                        src="/images/products/cart.png"
                        alt="Add to Cart"
                        width={20}
                        height={20}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </button>
                    <button className="p-2 bg-transparent rounded-full hover:bg-white">
                      <Image
                        src="/images/products/heart.png"
                        alt="Add to Wishlist"
                        width={20}
                        height={20}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </button>
                    <button className="p-2 bg-transparent rounded-full hover:bg-white">
                      <Image
                        src="/images/products/search-plus1.png"
                        alt="View Details"
                        width={20}
                        height={20}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
