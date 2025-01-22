import React from "react";
import Image from "next/image";
import { Product } from "../../sanity.types";
import imageUrl from "@/lib/imageUrl";
import Link from "next/link";

export default function TopCategoriesCard({ product }: { product: Product }) {
  const isOutOfStock = product.stockLevel != null && product.stockLevel <= 0;
  return (
    <>
      {/* Categories */}
      <div
        className={`relative group w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] flex flex-col gap-2 items-center justify-center transition-all`}
      >
        <div
          className={`relative rounded-full ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {product?.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name || "Product Image"}
              width={1000}
              height={1000}
              className={`w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] object-contain p-12 bg-[#F6F7FB]${isOutOfStock ? "opacity-50 cursor-not-allowed group-hover:shadow-none" : "group-hover:shadow-[-5px_5px_0px_#9877E7]"} group-hover:shadow-[-5px_5px_0px_#9877E7] rounded-full transition-all `}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex z-10 items-center justify-center rounded-full bg-gray-700 bg-opacity-50">
              <span className="text-white font-bold text-3xl">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Name and Price */}
        <div className="text-center font-josefin mt-2">
          <h3 className="text-[#151875] truncate text-base sm:text-lg font-semibold">
            {product?.name}
          </h3>
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

        {/* View Shop Button */}
        <Link href={`/GridPage`}>
        <button
          
          className={`absolute bottom-[70px] left-20 opacity-0 ${isOutOfStock ? "group-hover:opacity-0" : "group-hover:opacity-100"} bg-[#08D15F] text-white px-4 py-1 rounded shadow-md text-sm hover:bg-[#06A94D] transition-all`}
        >
          View Shop
        </button>
        </Link>
      </div>
    </>
  );
}
