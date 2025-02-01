"use client";
import imageUrl from "@/lib/imageUrl";
import useBasketStore from "@/store/store";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import PlusOrMinusButton from "../PlusOrMinusButton";
import { Product } from "../../../sanity.types";

export default function ShoppingCurt({ product }: { product: Product }) {
  const groupItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { removeItem, getItemCount, updateCart, clearBasket, getTotalDiscountedPrice, getSubTotal } = useBasketStore();
  const itemCount = getItemCount(product?._id);
  console.log("itemCount", itemCount, "isSignedIn", isSignedIn, "route", router);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loader />;
  }

  if (groupItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your basket</h1>
        <p className="text-gray-600 text-lg">Your basket is empty</p>
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto py-16 md:py-24 px-0 md:px-6">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-0 xl:gap-8">
            {/* Product Table */}
            <div className="col-span-3 josefin">
              <div className="w-full text-left border-collapse">
                <div className="hidden md:block">
                  <div className="flex w-[100%] lg:w-full items-center justify-between">
                    <h1 className="text-xl w-[43%] text-[#1D3178] font-bold">
                      Product
                    </h1>
                    <div className="text-xl text-[#1D3178] font-bold">Price</div>
                    <div className="text-xl text-[#1D3178] font-bold">
                      Quantity
                    </div>
                    <div className="text-xl text-[#1D3178] font-bold">Total</div>
                  </div>
                </div>
                <div className="items-center justify-center divide-y mb-6">
                  {groupItems?.map((item) => (
                    <div key={item.product._id} className="flex flex-col md:flex-row w-full items-center justify-between">
                      <div className="block md:hidden">
                        <div className="flex w-[100%] lg:w-full items-center justify-center">
                          <div className="text-xl w-full text-center mb-4 mt-6 text-[#1D3178] font-bold">
                            Product
                          </div>
                        </div>
                      </div>
                      <div className="py-4 flex flex-col md:flex-row items-center w-[41%] gap-4">
                        <div className="relative md:w-[100px] md:h-[100px]">
                          {item.product.image && (
                            <Image
                              src={imageUrl(item.product.image).url()}
                              alt={item.product.name || "Product"}
                              className="w-full h-full rounded-md object-contain"
                              width={1000}
                              height={1000}
                            />
                          )}
                          <button onClick={() => removeItem(item.product?._id)}>
                            <Image
                              src={"/images/products/unlist-product-icon.png"}
                              alt="Remove product"
                              className="absolute -top-1 -right-1 w-4 h-4 cursor-pointer"
                              width={16}
                              height={16}
                            />
                          </button>
                        </div>
                        <div className="w-full truncate">
                          <p className="font-medium w-full text-base truncate">{item.product.name}</p>
                        </div>
                      </div>
                      <div className="flex w-full md:w-auto justify-center items-center">
                        <div className="block md:hidden w-[43%]">
                          <div className="flex w-[100%] lg:w-full items-center justify-center">
                            <div className="text-xl w-full text-[#1D3178] font-bold">
                              Price
                            </div>
                          </div>
                        </div>
                        <div className="text-[#15245E] font-medium text-center w-[25%] md:w-auto">
                          {item.product?.isOnSale ? (
                            <>
                              <span className="text-sm md:text-base font-josefin font-semibold">
                                $
                                {(
                                  (parseFloat(item.product.price ?? "0") *
                                    (100 - (item.product.discountPercentage ?? 0))) /
                                  100
                                ).toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm md:text-base font-josefin font-semibold">
                              ${parseFloat(item.product.price ?? "0").toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex w-full md:w-auto justify-center items-center">
                        <div className="block md:hidden w-[43%]">
                          <div className="flex w-[100%] lg:w-full items-center justify-center">
                            <div className="text-xl w-full text-[#1D3178] font-bold">
                              Quantity
                            </div>
                          </div>
                        </div>
                        <div className="items-center justify-center flex w-[25%] md:w-auto">
                          <PlusOrMinusButton product={item.product} />
                        </div>
                      </div>
                      <div className="flex w-full md:w-auto justify-center items-center mb-2">
                        <div className="block md:hidden w-[43%]">
                          <div className="flex w-[100%] lg:w-full items-center justify-center">
                            <div className="text-xl w-full text-[#1D3178] font-bold">
                              Total
                            </div>
                          </div>
                        </div>
                        <div className="text-[#15245E] w-[25%] md:w-auto text-center">
                          {item.product?.isOnSale ? (
                            <>
                              <span className="text-sm md:text-base font-josefin font-semibold">
                                $
                                {(
                                  item.quantity *
                                  (
                                    (parseFloat(item.product.price ?? "0") *
                                      (100 - (item.product.discountPercentage ?? 0))) /

                                    100
                                  )
                                ).toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm md:text-base font-josefin font-semibold">
                              ${(
                                item.quantity *
                                parseFloat(item.product.price ?? "0")
                              ).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => updateCart()} className="bg-pink-500 text-white px-6 py-2 rounded-sm hover:bg-pink-600">
                  Update Cart
                </button>
                <button onClick={() => clearBasket()} className="bg-pink-500 text-white px-6 py-2 rounded-sm hover:bg-pink-600">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Totals and Calculate Shipping */}
            <div className="space-y-8 col-span-2">
              {/* Cart Totals */}
              <div className="w-full sticky lg:top-4 h-fit p-0 order-first lg:order-last bottom-0 left-0 lg:left-auto">
                <div className="mb-6">
                  <h3 className="text-xl text-center text-[#1D3178] font-bold mb-4">Cart Totals</h3>
                  <div className="p-6 py-8 bg-[#E8E6F1] rounded-md">
                    <div className="flex justify-between mb-6 border-b-2 border-[#E8E6F1] pb-1">
                      <span className="text-[#1D3178] font-medium text-lg">Subtotals:</span>
                      <span className="text-[#1D3178]">${getSubTotal()}</span>
                    </div>
                    <div className="flex justify-between mb-6 border-b-2 border-[#dedaec] pb-1">
                      <span className="text-[#1D3178] font-medium">Totals:</span>
                      <span className="text-[#1D3178] font-bold">${getTotalDiscountedPrice()}</span>
                    </div>
                    <p className="text-[#8A91AB] text-sm mb-4">Shipping & taxes calculated at checkout</p>
                    <button className="w-full bg-[#19D16F] text-white py-2 rounded-md hover:bg-[#16ab58]">Proceed to Checkout</button>
                  </div>
                </div>

                {/* Calculate Shipping */}
                <div>
                  <h3 className="text-xl text-center text-[#1D3178] font-bold mb-4">Calculate Shipping</h3>
                  <div className="p-6 bg-[#E8E6F1] rounded-md">
                    <div className="space-y-6">
                      <input type="text" placeholder="Country" className="w-full bg-[#E8E6F1] px-2 rounded-md py-2 border-b-2 border-[#dedaec]" />
                      <input type="text" placeholder="City" className="w-full bg-[#E8E6F1] px-2 rounded-md py-2 border-b-2 border-[#dedaec]" />
                      <input type="text" placeholder="Postal Code" className="w-full bg-[#E8E6F1] px-2 rounded-md py-2 border-b-2 border-[#dedaec]" />
                    </div>
                    <button className="w-1/2 mt-4 bg-pink-500 text-white py-2 rounded-sm hover:bg-pink-600">Calculate Shipping</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
