import React from "react";
import Link from "next/link";
import ShoppingCurt from "./ShoppingCurt";

export default function ShoppingCurtSection() {
  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold text-navy-900 mb-4 text-[#101750] josefin">
            Product Details
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
            <span className="text-pink-500">Product Details</span>
          </nav>
        </div>
      </section>
      <ShoppingCurt />
    </>
  );
}
