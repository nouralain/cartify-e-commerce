import Image from "next/image";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { MoveRight } from "lucide-react";
import { ProductCard } from "@/components/product/productCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const imageSlider: string[] = [
  "/61GiJeQ82vL._SX3000_.jpg",
  "/61Hli1jABKL._SX3000_.jpg",
  "/61iUO1T-ELL._SX3000_.jpg",
  "/61Z4W0jra4L._SX3000_.jpg"
];

export default async function Home() {
  
  const categories = await apiClient.getCategories();
  const products = await apiClient.getProducts()  
  return (
    <div className="flex flex-col relative w-full">
      {/* Hero Carousel */}
      <div className="relative  w-full max-w-375 mx-auto bg-[#eaeded] -mb-37.5 sm:-mb-62.5 md:-mb-87.5 z-0">
        <Carousel className="w-full " opts={{ loop: true }}>
          <CarouselContent className="ml-0  pt-0!">
            {/* Banner Items */}
            {imageSlider.map((src,index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative w-full h-75 sm:h-100 md:h-150">
                  {/* Faux image background using linear gradient for mockup purposes */}
                  <Image 
              src={src} 
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0} 
              className="object-cover"
            />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Bottom Fade Gradient Overlay */}
          <div className="absolute bottom-0 w-full h-[50%] bg-linear-to-t from-[#eaeded] via-[#eaeded]/80 to-transparent pointer-events-none z-10" />

          {/* Carousel Controls */}
          <CarouselPrevious className="absolute left-2 sm:left-4 top-[30%] -translate-y-1/2 h-20 w-12 sm:h-32 sm:w-16 rounded-md bg-transparent border-none text-black hover:bg-transparent *:w-8 *:h-8 sm:*:w-12 sm:*:h-12 focus:bg-transparent focus:ring-2 focus:ring-amazon-blue disabled:opacity-0 transition-opacity z-20 outline-none" />
          <CarouselNext className="absolute right-2 sm:right-4 top-[30%] -translate-y-1/2 h-20 w-12 sm:h-32 sm:w-16 rounded-md bg-transparent border-none text-black hover:bg-transparent *:w-8 *:h-8 sm:*:w-12 sm:*:h-12 focus:bg-transparent focus:ring-2 focus:ring-amazon-blue disabled:opacity-0 transition-opacity z-20 outline-none" />
        </Carousel>
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
            <Link 
            href={`/categories/${category._id}`}
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
                href={`/categories/${category._id}`}
                className="text-amazon-blue text-sm hover:text-[#c45500] hover:underline"
              >
                Shop now
              </Link>
            </Link>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
            {products.data.slice(0,10).map((product) => (
              <ProductCard key={product._id} product={product}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
