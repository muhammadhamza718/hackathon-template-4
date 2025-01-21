import React from 'react';

interface ProductFeatureProps {
  text: string;
  color: string; 
}

const ProductFeature = ({ text, color }: ProductFeatureProps ) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <p className="text-[#ACABC3] font-lato text-[16px]">{text}</p>
    </div>
  );
};

export default ProductFeature;