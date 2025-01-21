import React from 'react'
import { AddToBasketButtonProps } from './Grid-components/ProductGridCard'
import useBasketStore from '@/store/store';
import Image from 'next/image';

export default function PlusOrMinusButton({ product, disabled }: AddToBasketButtonProps) {
    const { addItem, removeItem, getItemCount } = useBasketStore();
    const itemCount = getItemCount(product._id);
    
    return (
        <div>
            <div className="w-12 border flex justify-between items-center text-xs text-[#BEBFC2] bg-[#F0EFF2]">
                <button onClick={() => removeItem(product._id)}>
                    <span className={`${itemCount === 0
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                        }`}>
                        <Image
                            src="/images/products/minus.png"
                            alt="Minus icon"
                            width={12}
                            height={12}
                            className="cursor-pointer"
                        // onClick={() => handleQuantityChange("decrement")}
                        />
                    </span>
                </button>
                <span>{itemCount}</span>
                <button onClick={() => addItem(product)} disabled={disabled}>
                    <Image
                        src="/images/products/plus.png"
                        alt="Plus icon"
                        width={12}
                        height={12}
                        className="cursor-pointer"
                    // onClick={() => handleQuantityChange("increment")}
                    />
                </button>
            </div>
        </div>
    )
}
