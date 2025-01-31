import React from 'react'
import ShopListSection from '@/components/ShopList-components/ShopListSection'
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default async function page() {
    const products = await getAllProducts();
  return (
    <>
      
      <ShopListSection product={products} />

    </>
  )
}
