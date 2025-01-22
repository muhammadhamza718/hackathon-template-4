import React from "react";
import Image from "next/image";
import { Product } from "../../sanity.types";
import imageUrl from "@/lib/imageUrl";
import Link from "next/link";

export function LatestProductCard({ product }: { product: Product }) {
  const isOutOfStock = product.stockLevel != null && product.stockLevel <= 0;
  return (
    <Link className="group relative w-full max-w-[370px] h-auto" href={`/ProductDetail/${product.slug?.current}`}>
      <div
        className={`group relative w-full max-w-[370px] h-auto ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isOutOfStock && (
          <div className="absolute inset-0 flex z-10 items-center justify-center bg-gray-700 bg-opacity-50">
            <span className="text-white font-bold text-3xl">Out of Stock</span>
          </div>
        )}
        <div className="bg-[#F6F7FB] group-hover:bg-white rounded-lg p-4 md:p-6 lg:p-8 transition-all duration-300">
          <div
            className={`relative aspect-square flex items-center justify-center transition-transform duration-300 ${isOutOfStock ? "group-hover:scale-100" : "group-hover:scale-95"}`}
          >
            {/* Conditionally render the sale image */}
            {product?.isOnSale && (
              <Image
                src={"/images/products/sale.png"}
                alt="Sale"
                width={223}
                height={229}
                className="absolute top-4 -left-16 object-contain max-w-[80px] max-h-[80px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            )}

            {product?.image && (
              <Image
                src={imageUrl(product.image).url()}
                alt={product.name || "Product Image"}
                width={223}
                height={229}
                className="object-contain z-300 w-full h-full max-w-[223px] max-h-[229px]"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            )}
            <div
              className={`absolute right-[258px] top-52 flex flex-col ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} gap-2 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}
            >
              <button
                className={`p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors`}
              >
                <Image
                  src={"/images/products/Shopping-cart.png"}
                  width={18}
                  height={18}
                  alt="Shopping Cart logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </button>
              <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
                <Image
                  src={"/images/products/Dark-blue-heart.png"}
                  width={18}
                  height={18}
                  alt="Shopping Cart logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </button>
              <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
                <Image
                  src={"/images/products/Dark-blue-search-plus.png"}
                  width={18}
                  height={18}
                  alt="Shopping Cart logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </button>
            </div>
            {isOutOfStock && (
              <div className={`${isOutOfStock ? "group-hover:opacity-0" : ""}`}>
                <div
                  className={`absolute right-[258px] top-52 flex flex-col ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} gap-2 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}
                >
                  <button
                    className={`p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors`}
                  >
                    <Image
                      src={"/images/products/Shopping-cart.png"}
                      width={18}
                      height={18}
                      alt="Shopping Cart logo"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
                    <Image
                      src={"/images/products/Dark-blue-heart.png"}
                      width={18}
                      height={18}
                      alt="Shopping Cart logo"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
                    <Image
                      src={"/images/products/Dark-blue-search-plus.png"}
                      width={18}
                      height={18}
                      alt="Shopping Cart logo"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 space-y-2 font-josefin">
          <h3 className="text-[#151875] truncate pr-6 text-sm md:text-base hover:text-[#FB2E86] transition-colors cursor-pointer">
            {product?.name}
          </h3>
          <div className="flex items-center gap-2">
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
        </div>
      </div>
    </Link>
  );
}
