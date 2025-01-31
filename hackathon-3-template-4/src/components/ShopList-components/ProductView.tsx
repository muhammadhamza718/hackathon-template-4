import React from 'react'
import { Product } from '../../../sanity.types'
import ShopListSection from './ShopListSection'

export default function ProductView({ product} : { product: Product[] }) {
  return (
    <>
    
    <ShopListSection product={product} />
    
    </>
  )
}
