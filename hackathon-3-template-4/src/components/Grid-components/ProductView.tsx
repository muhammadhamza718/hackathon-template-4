import React from 'react'
import ShopGridSection from './ShopGridSection'
import { Product } from '../../../sanity.types'

export default function ProductView({ product} : { product: Product[] }) {
  return (
    <>
    
    <ShopGridSection product={product} />
    
    </>
  )
}
