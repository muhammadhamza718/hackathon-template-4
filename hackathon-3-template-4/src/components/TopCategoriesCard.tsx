import React from "react";
import Image from "next/image";
import { Product } from "../../sanity.types";
import imageUrl from "@/lib/imageUrl";
import Link from "next/link";

export default function TopCategoriesCard({ product }: { product: Product }) {
  const isOutOfStock = product.stockLevel != null && product.stockLevel <= 0;

  return (
    <div className={`relative group w-[90%] max-w-[300px] mx-auto flex flex-col items-center justify-center ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""} gap-2 transition-all`}>
      {/* Product Image */}
      <div className="relative w-[200px] h-[200px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]">
        {product?.image && (
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
            fill
            className={`object-contain p-6 bg-[#F6F7FB] rounded-full ${isOutOfStock
                ? "opacity-50 cursor-not-allowed group-hover:shadow-none"
                : "group-hover:shadow-[-5px_5px_0px_#9877E7]"
              } transition-all`}
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center rounded-full justify-center bg-gray-700 bg-opacity-50">
            <span className="text-white font-bold text-3xl">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Name and Price */}
      <div className="text-center font-josefin mt-2">
        <h3 className="text-[#151875] truncate text-base sm:text-base md:text-lg font-semibold">
          {product?.name}
        </h3>
        {product?.isOnSale ? (
          <>
            <span className="text-xs sm:text-base md:text-base font-josefin font-semibold">
              $
              {(
                (parseFloat(product.price ?? "0") *
                  (100 - (product.discountPercentage || 0))) /
                100
              ).toFixed(2)}
            </span>
            <span className="text-[#FB2448] text-base font-josefin font-semibold ml-2 line-through">
              ${product?.price}
            </span>
          </>
        ) : (
          <span className="text-base sm:text-base md:text-base font-josefin font-semibold">
            ${product?.price}
          </span>
        )}
      </div>

      {/* View Shop Button */}
      <Link href={`/GridPage`}>
        <button
          className={`absolute bottom-[80px] sm:bottom-[100px] left-1/2 transform -translate-x-1/2 opacity-0 ${isOutOfStock ? "group-hover:opacity-0 cursor-not-allowed" : "group-hover:opacity-100"
            } bg-[#08D15F] text-white px-3 py-1 sm:px-4 sm:py-2 rounded shadow-md text-base sm:text-base hover:bg-[#06A94D] transition-all`}
        >
          View Shop
        </button>
      </Link>
    </div>
  );
}
