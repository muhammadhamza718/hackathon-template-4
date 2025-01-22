import React from 'react'
import { Product } from '../../sanity.types';
import TopCategories from './TopCategories';

interface TopCategoriesViewProps {
    products : Product[];
}

export default function TopCategoriesView({products} : TopCategoriesViewProps) {
  return (
    <>
    
    <TopCategories products={products} />
    
    </>
  )
}
