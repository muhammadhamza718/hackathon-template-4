import Image from "next/image";
import React from 'react'

interface TrendingProductCardProps{
    title: string;
    price: string;
    image: string;  
} 

const TrendingProductCard = ({ title, price, image }: TrendingProductCardProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
        <Image
          src={image}
          alt="kamzor"
          width={64}
          height={71}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div>
        <p className="text-[16px] text-[#151875]  font-josefin">
         {title}
        </p>
        <span className="text-[12px] text-[#151875] line-through font-medium font-josefin">
        {price}
        </span>
      </div>
    </div>
  );
};

export default TrendingProductCard
