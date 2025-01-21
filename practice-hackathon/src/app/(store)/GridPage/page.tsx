import React from 'react'
import ShopGridSection from '@/components/Grid-components/ShopGridSection'
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default async function page() {
  const products = await getAllProducts();
  
  return (
    <>
      
      <ShopGridSection product={products} />

    </>
  )
}
