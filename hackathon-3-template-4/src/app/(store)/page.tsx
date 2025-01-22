import HeroSection from "@/components/HeroSection";
import { LatestProducts } from "@/components/LatestProducts";
import { ProductShowcase } from "@/components/ProductShowcase";
import TrendingProducts from "@/components/TrendingProducts";
import { DiscountItem } from "@/components/DiscountItem";
import TopCategories from "@/components/TopCategories";
import SubscribeSection from "@/components/SubscribeSection";
import LogoSection from "@/components/LogoSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import FeaturedProductView from "@/components/FeaturedProductView";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div>
      <HeroSection />
      <FeaturedProductView products={products} />
      <LatestProducts products={products}  />
      <ProductShowcase />
      <TrendingProducts products={products}/>
      <DiscountItem />
      <TopCategories products={products} />
      <SubscribeSection />
      <LogoSection />
      <LatestBlogSection />
    </div>
  );
}
