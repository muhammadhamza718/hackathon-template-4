"use client";

import useBasketStore from '@/store/store';
import React from 'react'
import { Product } from '../../sanity.types';

export default function AddToCart({product} : {product : Product}) {
    const { addItem } = useBasketStore();
    return (
        <div>
            <button onClick={() => addItem(product)} className="px-4 py-1 w-40 bg-white text-[#151875] rounded-md shadow-md hover:bg-[#EBF4F3]">
                Add to Cart
            </button>
        </div>
    )
}
