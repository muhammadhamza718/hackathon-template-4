import AddToCart from '@/components/AddToCart';
import { logos } from '@/components/data/sample_data';
import { ProductCard } from '@/components/FeaturedProductCard';
import imageUrl from '@/lib/imageUrl';
import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stockLevel != null && product.stockLevel <= 0;

  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-8 px-4 lg:py-24 lg:px-6">
          <h1 className="text-2xl lg:text-4xl font-bold font-josefin mb-4 text-[#101750]">
            Product Details
          </h1>
          <nav className="text-black font-lato font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">.</span>
            <Link href="/" className="hover:underline">
              Pages
            </Link>
            <span className="mx-2 text-pink-500">.</span>
            <span className="text-pink-500">Product Details</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 lg:py-16 px-4 lg:px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-6 p-6 lg:p-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-full flex justify-center">
              <div className="relative">
                {product.image && (
                  <Image
                    src={imageUrl(product.image).url()}
                    alt={product.name || 'Product Image'}
                    width={1000}
                    height={1000}
                    className="w-full max-w-md lg:max-w-lg object-contain rounded-md"
                  />
                )}
                {isOutOfStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white font-bold text-lg">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-xl lg:text-3xl font-bold text-[#0D134E]">{product.name}</h1>
              <div className="flex items-center">
                <Image src="/images/products/five-star.png" alt="Rating" width={110} height={110} />
                <h1 className="ml-2 text-[#151875]">(22)</h1>
              </div>
              <div className="text-lg text-[#151875] font-semibold">
                {product?.isOnSale ? (
                  <>
                    <span className="text-base font-josefin">
                      $
                      {(
                        (parseFloat(product.price ?? '0') *
                          (100 - (product.discountPercentage || 0))) /
                        100
                      ).toFixed(2)}
                    </span>
                    <span className="text-[#FB2448] text-sm ml-2 line-through">${product?.price}</span>
                  </>
                ) : (
                  <span className="text-base font-josefin">${product?.price}</span>
                )}
              </div>
              <div>
                <span className="block text-[#0D134E] font-semibold">Color</span>
              </div>
              <p className="text-[#A9ACC6] text-sm">{product.description}</p>
              <div className="flex gap-4 mt-4">
                <AddToCart product={product} />
                <Image src="/images/products/heart-1.png" alt="Heart" width={35} height={35} />
              </div>
              <div className="text-[#151875] text-lg font-semibold mt-4">
                Category: <span className="text-[#FB2448]">{product.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#151875] text-lg font-semibold">Store:</p>
                <Image
                  src="/images/products/share-2.png"
                  alt="Share"
                  width={100}
                  height={100}
                  className="h-4 w-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#F9F8FE]">
        <div className="max-w-7xl mx-auto py-8 lg:py-16 px-4 lg:px-6">
          <div className="flex flex-col md:flex-row gap-6 border-b pb-4">
            {['Description', 'Additional Info', 'Reviews', 'Video'].map((tab) => (
              <button
                key={tab}
                className="text-[#151875] font-bold text-base lg:text-lg hover:text-blue-600 border-b-2 border-transparent hover:underline"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-[#151875]">Various tempor</h2>
            <p className="text-[#A9ACC6] mt-2">{product.description}</p>
            <h3 className="text-xl font-bold text-[#151875] mt-6">
              More details
            </h3>
            <ul className="list-none mt-4 space-y-2">
              {[...Array(4)].map((_, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[#A9ACC6]"
                >
                  <span className="text-[#2F1AC4] text-xl">
                    <Image
                      src="/images/products/right-arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto py-8 lg:py-16 px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#151875] mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard key={product._id} product={product} />
        </div>
      </div>

      {/* Logos Section */}
      <section className="py-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-8">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={5000}
              height={5000}
              className="h-full w-full"
            />
          ))}
        </div>
      </section>
    </>
  );
}
