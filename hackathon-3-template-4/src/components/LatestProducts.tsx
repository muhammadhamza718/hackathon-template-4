"use client"

import React, { useState } from "react";
import { ShopexOffer } from "./ShopexOffer";
import { ProductTabs } from "./ProductTabs";
import { LatestProductCard } from "./LatestProductCard";
import { Product } from "../../sanity.types";

export function LatestProducts({ products }: { products: Product[] }) {
  const tabs = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const latestProducts = products.slice(0, 6);

  return (
    <section className="container mx-auto py-16 md:py-12 lg:py-16 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-[42px] text-[#151875] font-josefin font-bold text-center mb-6 md:mb-8">
        Latest Products
      </h2>
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {latestProducts.map((product) => (
          <LatestProductCard key={product._id} product={product} />
        ))}
      </div>
      <ShopexOffer />
    </section>
  );
}
