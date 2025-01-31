import ShopGridSection from "@/components/Grid-components/ShopGridSection";
import { searchProductsBySlug } from "@/sanity/lib/products/searchProductsBySlug";
import React from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await searchParams;
  const products = await searchProductsBySlug(query);
  if (!products.length) {
    return (
      <>
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-full">
            <h1 className="text-3xl font-bold text-center mb-6">
              No results found for {query}
            </h1>
            <p className="text-gray-800 text-center">
              try searching with different keywords
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 w-full">
        <div className="bg-white rounded-lg shadow-md w-full max-w-full mx-auto">
          <ShopGridSection product={products} />
        </div>
      </div>
    </>
  );
}
