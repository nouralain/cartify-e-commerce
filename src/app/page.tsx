import Image from "next/image";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { MoveRight } from "lucide-react";
import { ProductCard } from "@/components/product/productCard";



export default async function Home() {
  
  const categories = await apiClient.getCategories();
  const products = await apiClient.getProducts()  
  return (
    <div className="flex flex-col relative w-full">
      {/* Hero Carousel (Mocked as a static banner for visual layout) */}
      <div className="relative w-full h-75 sm:h-100 md:h-150 bg-linear-to-b from-[#1FA0BE] to-[#eaeded] flex justify-center -mb-37.5 sm:-mb-62.5 md:-mb-87.5 z-0">
        {/* Placeholder for Carousel Banner */}
        <div className="absolute top-0 w-full h-full object-cover mix-blend-overlay opacity-30 bg-black"></div>
      </div>

      <div className="z-10 px-4 md:px-6 w-full max-w-375 mx-auto">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl md:text-3xl font-bold">Shop by Category</h2>
          <Link
            href={"/categories"}
            className="text-amazon-blue text-xs md:text-base xl:text-xl hover:text-[#c45500] hover:underline pb-0.75 flex items-center gap-2"
          >
            View All Categories <MoveRight />
          </Link>
        </div>
        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8 pt-4">
          {categories.data.slice(0, 4).map((category) => (
            <div
              key={category._id}
              className="bg-white p-4 flex flex-col h-100"
            >
              <h3 className="text-xl font-bold mb-3">{category.name}</h3>
              <div className="relative grow cursor-pointer group mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                href={`/categories/${category.slug}`}
                className="text-amazon-blue text-sm hover:text-[#c45500] hover:underline"
              >
                Shop now
              </Link>
            </div>
          ))}
        </div>

        {/* Ad bar */}
        <div className="w-full bg-white border border-gray-200 h-16 md:h-24 mb-8 flex items-center justify-center p-2 mt-4 text-center">
          <span className="text-gray-500 font-medium">
            Free Shipping to Your Country on eligible items
          </span>
        </div>

        {/* Featured Products */}
        <div className="bg-white p-4 md:p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Featured Products from our brands
            </h2>
            <Link
              href="/products"
              className="text-amazon-blue text-sm hover:text-[#c45500] hover:underline pb-0.75"
            >
              See more
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
            {products.data.slice(0,10).map((product) => (
              <ProductCard key={product._id} product={product}  />
            ))}
          </div>
        </div>

        {/* Additional Category Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[1, 2, 3, 4].map((idx) => (
            <div
              key={`more-${idx}`}
              className="bg-white p-4 flex flex-col h-100"
            >
              <h2 className="text-xl font-bold mb-3">Continue shopping</h2>
              <div className="grid grid-cols-2 gap-2 grow mb-4">
                <div className="bg-gray-100 flex items-center justify-center p-2">
                  <span className="text-xs text-center text-gray-500">
                    Item 1
                  </span>
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-2">
                  <span className="text-xs text-center text-gray-500">
                    Item 2
                  </span>
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-2">
                  <span className="text-xs text-center text-gray-500">
                    Item 3
                  </span>
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-2">
                  <span className="text-xs text-center text-gray-500">
                    Item 4
                  </span>
                </div>
              </div>
              <Link
                href="/products"
                className="text-amazon-blue text-sm hover:text-[#c45500] hover:underline"
              >
                Explore more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
