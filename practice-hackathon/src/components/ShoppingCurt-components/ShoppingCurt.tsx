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

export default function ShoppingCurt({ product } : { product : Product}) {
  // const { user } = useUser();
  // const [quantity, setQuantity] = useState(1);
  // const [isClient, setIsClient] = useState(false);
  // const [isloading, setIsLoading] = useState(false);
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

  // const handleQuantityChange = (action: "increment" | "decrement") => {
  //   if (action === "increment") {
  //     setQuantity(quantity + 1);
  //   } else if (action === "decrement" && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  // const handleCheckout = async () => {
  //   if (!isSignedIn) return;
  //   setIsLoading(true);
  //   window.location.href = "/checkout";
  //   try {
  //     const metadata: Metadata = {
  //         orderNumber: crypto.randomUUID(),
  //         customerName: user?.fullName ?? "unknown",
  //         customerEmail: user?.emailAddresses[0].emailAddress ?? "unknown",
  //         clerkUserId: user!.id,
  //     };
  //     const CheckoutUrl = await createCheckoutSession(groupItems, metadata)
  //     if(checkoutUrl){
  //         window.location.href = checkoutUrl;
  //     }
  //   } catch (error) {
  //     console.error("Error creating checkout session: ", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Product Table */}
            <div className="col-span-3 josefin">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b flex w-[100%] md:w-[724px] items-center justify-between">
                    <th className="text-xl w-[43%] text-[#1D3178] font-bold">
                      Product
                    </th>
                    <th className="text-xl text-[#1D3178] font-bold">Price</th>
                    <th className="text-xl text-[#1D3178] font-bold">
                      Quantity
                    </th>
                    <th className="text-xl text-[#1D3178] font-bold">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {groupItems?.map((item) => (
                    <tr key={item.product._id} className="flex w-[100%] md:w-[724px] items-center justify-between">
                      <td className="py-4 flex items-center w-[41%] gap-4">
                        <div className="relative w-[84px] h-[84px]">
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
                      </td>
                      <td className="text-[#15245E] font-medium text-center">
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
                      </td>
                      <td className="items-center justify-center flex">
                        <PlusOrMinusButton product={item.product} />
                      </td>
                      <td className="text-[#15245E]">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              <h3 className="text-xl text-center text-[#1D3178] font-bold mb-4">
                Cart Totals
              </h3>
              <div className="p-6 py-8 bg-[#E8E6F1] rounded-md">
                <div className="flex justify-between mb-6 border-b-2 border-[#E8E6F1] pb-1">
                  <span className="text-[#1D3178] font-medium text-lg">
                    Subtotals:
                  </span>
                  <span className="text-[#1D3178]">${getSubTotal()}</span>
                </div>
                <div className="flex justify-between mb-6 border-b-2 border-[#dedaec] pb-1">
                  <span className="text-[#1D3178] font-medium">Totals:</span>
                  <span className="text-[#1D3178] font-bold">${getTotalDiscountedPrice()}</span>
                </div>
                <p className="text-[#8A91AB] text-sm mb-4">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-[#19D16F] text-white py-2 rounded-md hover:bg-[#16ab58]">
                  Proceed to Checkout
                </button>
              </div>

              {/* Calculate Shipping */}
              <h3 className="text-xl text-center text-[#1D3178] font-bold mb-4">
                Calculate Shipping
              </h3>
              <div className="p-6 bg-[#E8E6F1] rounded-md">
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full bg-[#E8E6F1] px-2 rounded-md py-2 border-b-2 border-[#dedaec]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-[#E8E6F1] px-2 rounded-md py-2 border-b-2 border-[#dedaec]"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full bg-[#E8E6F1] px-2 rounded-md py-2 border-b-2 border-[#dedaec]"
                  />
                </div>
                <button className="w-1/2 mt-4 bg-pink-500 text-white py-2 rounded-sm hover:bg-pink-600">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
