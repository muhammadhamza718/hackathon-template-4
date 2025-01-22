import React from 'react'
import { Product } from '../../sanity.types';
import { FeaturedProducts } from './FeaturedProducts';

interface FeaturedProductsViewProps {
  products: Product[];
}

export default function FeaturedProductView({products} : FeaturedProductsViewProps) {
  return (
    <div>
        <FeaturedProducts products={products} />
    </div>
  )
}
