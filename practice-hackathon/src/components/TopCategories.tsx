import React from "react";
import { Product } from "../../sanity.types";
import TopCategoriesCard from "./TopCategoriesCard";

export default function TopCategories({ products }: { products: Product[] }) {
  const TopCategories = products.slice(0, 4);
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Section Title */}
          <h2 className="font-josefin text-3xl sm:text-4xl font-bold text-[#151875] mb-8">
            Top Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {TopCategories.map((product) => (
              <TopCategoriesCard key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FB2E86] flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </span>
            <span className="w-3 h-3 rounded-full bg-[#FB2E86] flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
