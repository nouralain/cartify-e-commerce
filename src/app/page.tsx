import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

// Mock products data
const mockProducts = Array.from({ length: 30 }).map((_, i) => ({
  id: `prod-${i}`,
  title: `Sample Amazon Style Product ${i + 1} - High Quality and Reliable Features with modern design`,
  image: `https://images.unsplash.com/photo-${1505740420928 + i}?w=400&h=400&fit=crop`,
  price: 19.99 + (i * 5.5),
  rating: (Math.random() * 2) + 3,
  reviewCount: Math.floor(Math.random() * 10000) + 100
}));

// Mock categories for the 4-grid tiles
const categoryTiles = [
  {
    title: "Gaming accessories",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&h=300&fit=crop",
    link: "/categories"
  },
  {
    title: "Refresh your space",
    image: "https://images.unsplash.com/photo-1583847268964-b28e511d981k?w=300&h=300&fit=crop", // Add real unsplash id later if needed
    link: "/categories"
  },
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=300&fit=crop",
    link: "/categories"
  },
  {
    title: "Shop Deals in Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop",
    link: "/categories"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col relative w-full">
      {/* Hero Carousel (Mocked as a static banner for visual layout) */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-b from-[#1FA0BE] to-[#eaeded] flex justify-center -mb-[150px] sm:-mb-[250px] md:-mb-[350px] z-0">
        {/* Placeholder for Carousel Banner */}
        <div className="absolute top-0 w-full h-full object-cover mix-blend-overlay opacity-30 bg-black"></div>
      </div>

      <div className="z-10 px-4 md:px-6 w-full max-w-[1500px] mx-auto">
        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8 pt-4">
          {categoryTiles.map((category, idx) => (
            <div key={idx} className="bg-white p-4 flex flex-col h-[400px]">
              <h2 className="text-xl font-bold mb-3">{category.title}</h2>
              <div className="relative flex-grow cursor-pointer group mb-4">
                <Image 
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Link href={category.link} className="text-[#007185] text-sm hover:text-[#c45500] hover:underline">
                Shop now
              </Link>
            </div>
          ))}
        </div>
        
        {/* Ad bar */}
        <div className="w-full bg-white border border-gray-200 h-16 md:h-24 mb-8 flex items-center justify-center p-2 mt-4 text-center">
           <span className="text-gray-500 font-medium">Free Shipping to Your Country on eligible items</span>
        </div>

        {/* Featured Products */}
        <div className="bg-white p-4 md:p-6 mb-8">
          <div className="flex items-end gap-4 mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Featured Products from our brands</h2>
            <Link href="/products" className="text-[#007185] text-sm hover:text-[#c45500] hover:underline pb-[3px]">
              See more
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
            {mockProducts.slice(0, 15).map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Additional Category Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[1,2,3,4].map(idx => (
            <div key={`more-${idx}`} className="bg-white p-4 flex flex-col h-[400px]">
              <h2 className="text-xl font-bold mb-3">Continue shopping</h2>
              <div className="grid grid-cols-2 gap-2 flex-grow mb-4">
                <div className="bg-gray-100 flex items-center justify-center p-2"><span className="text-xs text-center text-gray-500">Item 1</span></div>
                <div className="bg-gray-100 flex items-center justify-center p-2"><span className="text-xs text-center text-gray-500">Item 2</span></div>
                <div className="bg-gray-100 flex items-center justify-center p-2"><span className="text-xs text-center text-gray-500">Item 3</span></div>
                <div className="bg-gray-100 flex items-center justify-center p-2"><span className="text-xs text-center text-gray-500">Item 4</span></div>
              </div>
              <Link href="/products" className="text-[#007185] text-sm hover:text-[#c45500] hover:underline">
                Explore more
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
