"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../../sanity.types"; // sanity type ke folder se
import imageUrl from "@/lib/imageUrl";
import Link from "next/link";
import useBasketStore from "@/store/store";

// ye yahan par product likhna
export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useBasketStore();
  const isOutOfStock = product.stockLevel != null && product.stockLevel <= 0;
  return (
    <div
      className={`group relative flex flex-col items-center justify-between w-full max-w-[270px] h-[350px] sm:h-[400px] shadow-lg rounded overflow-hidden ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {/* Image Section */}
      <div className="flex items-center justify-center bg-[#F6F7FB] w-full h-[200px] sm:h-[236px]">
        {product?.image && (
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
            width={500}
            height={500}
            className={`h-[150px] w-[150px] sm:h-[179px] sm:w-[178px] transition-transform object-contain ${isOutOfStock ? "group-hover:scale-100" : "group-hover:scale-110"}`}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <span className="text-white font-bold text-3xl">Out of Stock</span>
          </div>
        )}
        {product?.isFeaturedProduct && (
          <div
            className={`absolute top-4 left-4 opacity-0 ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} transition-opacity`}
          >
            <button
              onClick={() => addItem(product)}
              className={`p-2 bg-[#F6F7FB] ${isOutOfStock ? "cursor-not-allowed" : ""} rounded-full hover:bg-[#EEEFFB] hover:text-white transition-colors`}
            >
              <Image
                src={"/images/products/Shopping-cart.png"}
                width={18}
                height={18}
                alt="Shopping Cart logo"
                className="sm:size-5 hover:size-6"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </button>
            <button
              className={`p-2 bg-[#F6F7FB] ${isOutOfStock ? "cursor-not-allowed" : ""} rounded-full ml-2 hover:bg-[#EEEFFB] hover:text-white transition-colors`}
            >
              <Image
                src={"/images/products/blue-heart.png"}
                width={18}
                height={18}
                alt="Shopping blue heart logo"
                className="sm:size-5 hover:size-6 "
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </button>
            <button
              className={`p-2 bg-[#F6F7FB] ${isOutOfStock ? "cursor-not-allowed" : ""} rounded-full ml-2 hover:bg-[#EEEFFB] hover:text-white transition-colors`}
            >
              <Image
                src={"/images/products/search-plus.png"}
                width={18}
                height={18}
                alt="Shopping search plus logo"
                className="sm:size-5 hover:size-6"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </button>
          </div>
        )}
        {/* Feature Buttons */}
        {isOutOfStock && (
          <div
            className={`${isOutOfStock ? "group-hover:opacity-0 cursor-not-allowed" : ""}`}
          >
            {product?.isFeaturedProduct && (
              <div
                className={`absolute top-4 left-4 opacity-0 ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} transition-opacity`}
              >
                <button
                  className={`p-2 bg-[#F6F7FB] ${isOutOfStock ? "cursor-not-allowed" : ""} rounded-full hover:bg-[#EEEFFB] hover:text-white transition-colors`}
                >
                  <Image
                    src={"/images/products/Shopping-cart.png"}
                    width={18}
                    height={18}
                    alt="Shopping Cart logo"
                    className="sm:size-5 hover:size-6"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </button>
                <button
                  className={`p-2 bg-[#F6F7FB] ${isOutOfStock ? "cursor-not-allowed" : ""} rounded-full ml-2 hover:bg-[#EEEFFB] hover:text-white transition-colors`}
                >
                  <Image
                    src={"/images/products/blue-heart.png"}
                    width={18}
                    height={18}
                    alt="Shopping blue heart logo"
                    className="sm:size-5 hover:size-6 "
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </button>
                <button
                  className={`p-2 bg-[#F6F7FB] ${isOutOfStock ? "cursor-not-allowed" : ""} rounded-full ml-2 hover:bg-[#EEEFFB] hover:text-white transition-colors`}
                >
                  <Image
                    src={"/images/products/search-plus.png"}
                    width={18}
                    height={18}
                    alt="Shopping search plus logo"
                    className="sm:size-5 hover:size-6"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Content Section */}
      <div
        className={`text-center py-2 sm:py-3 flex-1 text-[12px] sm:text-[14px] font-lato space-y-1 w-full ${isOutOfStock ? "group-hover:bg-white group-hover:text-black" : "group-hover:bg-[#2F1AC4] group-hover:text-white"} transition-colors`}
      >
        <h3
          className={`${isOutOfStock ? "text-[#FB2E86]" : "text-[#FB2E86] group-hover:text-white"} truncate font-josefin text-2xl p-4 font-extrabold`}
        >
          {product?.name}
        </h3>

        {/* Feature-specific Content */}
        {product?.isFeaturedProduct && (
          <div className="space-y-1 sm:space-y-2">
            <div className="flex justify-center space-x-2">
              <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-full"></div>
              <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-full"></div>
              <div
                id="dot"
                className={`w-[14px] h-[4px] ${isOutOfStock ? "bg-[#00009D]" : "bg-[#00009D] group-hover:bg-[#FFEAC1]"} rounded-full `}
              ></div>
            </div>
            <p className="text-[10px] sm:text-[12px]">Code - Y523201</p>
          </div>
        )}

        {/* Price Section */}
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
      {/* View Details Button */}
      {product?.isFeaturedProduct && (
        <Link href={`/ProductDetail/${product.slug?.current}`}>
          <div
            className={`hidden group-hover:flex absolute bottom-44 left-1/2 transform ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} cursor-pointer -translate-x-1/2 bg-[#08D15F] w-[94px] h-[29px] items-center justify-center rounded-sm hover:bg-[#06B14C] transition-all duration-300`}
          >
            <p className="text-white font-josefin text-[12px]">View Details</p>
          </div>
        </Link>
      )}
      {isOutOfStock && (
        <div className={`${isOutOfStock ? "group-hover:opacity-0 cursor-not-allowed" : ""}`}>
          {product?.isFeaturedProduct && (
            <Link href={`/ProductDetail/${product.slug?.current}`} className={`${isOutOfStock ? "cursor-not-allowed" : ""}`}>
              <div
                className={`hidden group-hover:flex absolute bottom-44 left-1/2 transform ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} -translate-x-1/2 bg-[#08D15F] w-[94px] h-[29px] items-center justify-center rounded-sm hover:bg-[#06B14C] transition-all duration-300`}
              >
                <p className="text-white font-josefin text-[12px]">
                  View Details
                </p>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
