import Link from "next/link";
import { logos } from "../data/sample_data";
import Image from "next/image";
import OrderCompleted from "./OrderCompleted";

export default function OrderCompletedSection() {
  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
            Order Completed
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
            <span className="text-pink-500">Order Completed</span>
          </nav>
        </div>
      </section>

      <OrderCompleted />

      <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-wrap gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={1000}
                height={1000}
                className="h-auto w-auto"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
