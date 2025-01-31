import React from "react";
import Image from "next/image";
import { logos } from "./data/sample_data";

export default function LogoSection() {
  return (
    <section className="py-8 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-wrap gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={1000}
                height={1000}
                className="h-[93px] w-auto"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
