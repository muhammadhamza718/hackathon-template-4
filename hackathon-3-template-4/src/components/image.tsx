import React from "react";
import Image from "next/image";

export default function Productimage() {
  return (
    <>
      <Image
        src="/images/products/discount-chair.png"
        alt="Furniture Chair"
        width={509}
        height={550}
        className="rounded-md w-full sm:w-[400px]"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </>
  );
}
