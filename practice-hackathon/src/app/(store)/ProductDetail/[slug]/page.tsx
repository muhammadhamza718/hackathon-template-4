import AddToCart from '@/components/AddToCart';
import { logos } from '@/components/data/sample_data'
import { ProductCard } from '@/components/FeaturedProductCard';
import imageUrl from '@/lib/imageUrl';
import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation';

export default async function page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stockLevel != null && product.stockLevel <= 0;


  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
            Product Details
          </h1>
          <nav className="text-black lato font-medium">
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
      <div className="max-w-7xl mx-auto py-16">
        {/* Product Card */}
        <div className="rounded-lg shadow-2xl shadow-inner-md py-8">
          {/* Product Card */}
          <div className="bg-white flex flex-col md:flex-row gap-6 px-6">
            {/* Image Section */}
            <div className="grid grid-cols-4 md:grid-cols-5 gap-2 w-[40%] justify-items-center">
              <div className="col-span-3 md:col-span-5 col-start-3">
                {product.image && (
                  <Image
                    src={imageUrl(product.image).url()}
                    width={1000}
                    height={1000}
                    alt={product.name || "Product Image"}
                    className="w-full h-full object-contain rounded-md"
                  />
                )}
                {isOutOfStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white font-bold text-lg">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col flex-1 josefin justify-center gap-3">
              <h1 className="text-3xl truncate font-bold  text-[#0D134E]">
                {product.name}
              </h1>
              <div className="flex">
                <Image
                  src="/images/products/five-star.png"
                  alt="Rating"
                  width={110}
                  height={110}
                />
                <h1 className="ml-2 text-[#151875]">(22)</h1>
              </div>
              <div className="text-[#151875] text-lg font-semibold">
                {product?.isOnSale ? (
                  <>
                    <span className="text-sm md:text-base font-josefin font-semibold">
                      $
                      {(
                        (parseFloat(product.price ?? "0") *
                          (100 - (product.discountPercentage || 0))) /
                        100
                      ).toFixed(2)}
                    </span>
                    <span className="text-[#FB2448] text-xs font-josefin font-semibold ml-2 md:text-sm line-through">
                      ${product?.price}
                    </span>
                  </>
                ) : (
                  <span className="text-sm md:text-base font-josefin font-semibold">
                    ${product?.price}
                  </span>
                )}
              </div>
              <div className="">
                <span className="block text-[#0D134E] font-semibold">
                  Color
                </span>
              </div>
              <p className="text-[#A9ACC6]">
                {product.description}
              </p>
              <div className="flex gap-1">
                <AddToCart product={product} />
                <Image
                  src="/images/products/heart-1.png"
                  alt="Heart"
                  width={35}
                  height={35}
                />
              </div>
              <div className="">
                <p className="text-[#151875] font-semibold text-lg">
                  Category: <span className='text-[#FB2448] text-lg font-josefin font-semibold'>{product.category}</span>
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#151875] font-semibold text-lg mt-1">
                    Store:
                  </p>
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
      </div>
      <div className="bg-[#F9F8FE]">
        <div className="mt-8 max-w-7xl mx-auto px-6 py-24">
          {/* Tabs */}
          <div className="flex gap-6 border-b pb-2">
            {["Description", "Additional Info", "Reviews", "Video"].map(
              (tab) => (
                <button
                  key={tab}
                  className="text-[#151875] font-bold josefin text-xl hover:text-blue-600 border-b-2 border-transparent hover:underline hover:underline-offset-4"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          <div className="mt-6 josefin">
            <h2 className="text-xl font-bold text-[#151875]">Various tempor</h2>
            <p className="text-[#A9ACC6] mt-2">
              {product.description}
            </p>

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
      <div className="max-w-7xl josefin mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-[#151875] mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <ProductCard key={product._id} product={product} />
        </div>
      </div>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-6">
            {logos.map((logo, index) => (
              <div key={index} className="w-full flex justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={1000}
                  height={1000}
                  className="h-auto w-auto"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
