import Image from "next/image";
import React from "react";

export default function OrderCompleted() {
  return (
    <section className="min-h-maxflex flex-col items-center justify-center my-48 bg-white text-center p-6">
      <div className="flex relative items-center w-1/2 mx-auto border-b-2 border-l-2 border-dashed pb-20 justify-center gap-8">
        <div>
          <Image
            src="/images/products/clock-1.png"
            alt="Checkmark"
            width={300}
            height={300}
            className="absolute -left-10 -top-10 w-20 h-20"
          />
          <Image
            src="/images/products/checklist-1.png"
            alt="checklist"
            width={300}
            height={300}
            className="absolute -right-12 -bottom-8 w-20 h-20"
          />
        </div>

        <div className="max-w-3xl flex flex-col justify-center items-center">
          <Image
            src="/images/products/checked-icon.png"
            alt="checked"
            width={300}
            height={300}
            className="w-20 h-20 mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Your Order Is Completed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded shadow hover:bg-pink-600">
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}
