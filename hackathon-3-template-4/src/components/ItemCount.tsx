import useBasketStore from '@/store/store';
import React from 'react'
import { Product } from '../../sanity.types';

export default function ItemCount({ product }: { product: Product[], }) {
    const { getItemCount } = useBasketStore();
    const itemCount = getItemCount(product[0]?._id);
    return (
        <div className="flex justify-between items-center gap-4">
            {itemCount}
        </div>)
}
