import React from 'react'
import { Product } from '../../sanity.types';
import { LatestProducts } from './LatestProducts';

interface LatestProductsViewProps {
  products: Product[];
}

export default function LatestProductsView({products} : LatestProductsViewProps) {
  return (
    <>
    
    <LatestProducts products={products} />
    
    </>
  )
}
