"use client";

import Link from "next/link";
import ShoppingCurt from "./ShoppingCurt";
import useBasketStore from "@/store/store";

export default function ShoppingCurtSection() {
  const groupItems = useBasketStore((state) => state.getGroupedItems());
  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
            Shopping Cart
          </h1>
          <nav className="text-black lato font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">.</span>
            <Link href="/" className="hover:underline">
              Pages
            </Link>
            <span className="mx-2 text-pink-500">.</span>
            <span className="text-pink-500">Shopping Cart</span>
          </nav>
        </div>
      </section>
      <ShoppingCurt product={groupItems[0]?.product} />
    </>
  );
}
