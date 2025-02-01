"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../sanity.types";
import imageUrl from "@/lib/imageUrl";
import useBasketStore from "@/store/store";
import Loader from "../Loader";
import Link from "next/link";
import ItemCount from "../ItemCount";

export default function ProductList({ product }: { product: Product[], }) {
  const isOutOfStock = product.some(p => p.stockLevel != null && p.stockLevel <= 0);
  const groupItems = useBasketStore((state) => state.getGroupedItems());
  const [isClient, setIsClient] = useState(false);
  const { addItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product[0]?._id);
  const [sortOption, setSortOption] = useState("Best Match");
  const [perPage, setPerPage] = useState(12);
  const [view, setView] = useState("grid");

  console.log("itemCount", itemCount);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loader />;
  }

  if (groupItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your basket</h1>
        <p className="text-gray-600 text-lg">Your basket is empty</p>
      </div>
    );
  }

  // Sorting logic
  const sortedProducts = product?.slice().sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return (
          parseFloat((a.price ?? "").replace("$", "")) -
          parseFloat((b.price ?? "").replace("$", ""))
        );
      case "Price: High to Low":
        return (
          parseFloat((b.price ?? "").replace("$", "")) -
          parseFloat((a.price ?? "").replace("$", ""))
        );
      case "Newest First":
        return new Date(b._id).getTime() - new Date(a._id).getTime();
      default:
        return 0;
    }
  });

  return (
    <section className="w-full bg-white py-4">
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
                max={product?.length}
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
              <input
                id="perPage"
                type="number"
                className="w-32 border ml-4 border-[#E7E6EF] text-[#8A8FB9] rounded p-1 focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* Product Grid */}
        <div
          className={`grid ${view === "grid" ? "grid-cols-1 gap-6" : "grid-cols-1 gap-4"
            }`}
        >

          {sortedProducts.slice(0, perPage).map((product) => (
            <div
              key={product?._id}
              className={`group relative flex flex-col lg:flex-row justify-start items-start ${product.stockLevel != null && product.stockLevel <= 0 ? "opacity-50 cursor-not-allowed hover:bg-white" : ""}  bg-white overflow-hidden p-4 gap-6 hover:bg-[#EBF4F3]`}
            >
              <div className={`${product.stockLevel != null && product.stockLevel <= 0 && (`absolute inset-0 flex z-10 items-center justify-center bg-gray-700 bg-opacity-50`)}`}></div>
              <div className="relative w-full lg:w-1/4 h-52">
                {/* Image */}
                {product.image && (
                  <Image
                    src={imageUrl(product?.image).url()}
                    alt={product.name || "Product Image"}
                    className="object-contain rounded-lg"
                    fill
                    sizes="100vw"
                  />
                )}
                {product.stockLevel != null && product.stockLevel <= 0 && (
                  <span className="absolute flex items-center justify-center inset-0 z-10 text-white font-bold text-3xl">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Product details */}
              <div className="flex flex-col justify-center w-full h-full lg:w-2/3 gap-2">
                <div className="flex justify-start gap-4 items-center">
                  <h3 className="josefin font-semibold truncate text-[#151875] text-lg w-3/5 md:w-1/4">
                    {product?.name}
                  </h3>
                  <div className="flex items-center gap-2 my-2">
                    <div className="h-3 w-3 rounded-full bg-[#DE9034]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#EC42A2]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#8568FF]"></div>
                  </div>
                </div>
                <p className="text-[#8A8FB9] text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <br /> adipiscing in phasellus non in justo.
                </p>
                <div>
                  <ItemCount product={[product]} />
                </div>
                <div className="josefin flex justify-start items-center gap-2">
                  {product?.isOnSale ? (
                    <>
                      <span className="text-sm md:text-base font-josefin font-semibold">
                        $
                        {(
                          (parseFloat(product.price ?? "0") *
                            (100 - (product.discountPercentage || 0))) /
                          100
                        ).toFixed(2)}
                      </span>
                      <span className="text-[#FB2448] text-xs font-josefin font-semibold ml-2 md:text-sm line-through">
                        ${product?.price}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm md:text-base font-josefin font-semibold">
                      ${product?.price}
                    </span>
                  )}
                </div>
                <Link href={`/ProductDetail/${product.slug?.current}`}>
                  <div
                    className={`flex bg-[#08D15F] w-[94px] h-[29px] items-center justify-center rounded-sm hover:bg-[#06B14C] transition-all duration-300`}
                  >
                    <p className="text-white font-josefin text-[12px]">
                      View Details
                    </p>
                  </div>
                </Link>
                <div className="flex gap-4">
                  <button onClick={() => addItem(product)} className="p-2 bg-transparent rounded-full hover:bg-white">
                    <Image
                      src="/images/products/cart.png"
                      alt="Add to Cart"
                      width={20}
                      height={20}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </button>
                  <button className="p-2 bg-transparent rounded-full hover:bg-white">
                    <Image
                      src="/images/products/heart.png"
                      alt="Add to Wishlist"
                      width={20}
                      height={20}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </button>
                  <button className="p-2 bg-transparent rounded-full hover:bg-white">
                    <Image
                      src="/images/products/search-plus1.png"
                      alt="View Details"
                      width={20}
                      height={20}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
