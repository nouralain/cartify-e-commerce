import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";

const mockProducts = Array.from({ length: 24 }).map((_, i) => ({
  id: `search-prod-${i}`,
  title: `Example Search Result ${i + 1} - Amazon Clone Product with High Quality`,
  image: `https://images.unsplash.com/photo-${1505740420928 + i}?w=400&h=400&fit=crop`,
  price: 29.99 + (i * 12.5),
  rating: (Math.random() * 2) + 3,
  reviewCount: Math.floor(Math.random() * 5000) + 10
}));

export default function ProductsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 w-full">
      <div className="hidden md:block w-[240px] flex-shrink-0 mt-4">
        <FilterSidebar />
      </div>
      <div className="flex-grow mt-4">
        <div className="bg-white border-b border-gray-200 p-3 mb-4 shadow-sm text-sm text-[#565959] rounded-sm">
          1-24 of over 10,000 results for <span className="text-[#c45500] font-bold">"search term"</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Pagination mock */}
        <div className="flex justify-center mt-12 mb-8">
          <div className="flex border border-gray-300 rounded shadow-sm divide-x divide-gray-300 overflow-hidden text-sm bg-white">
            <button className="px-4 py-2 hover:bg-gray-50 flex items-center shadow-inner">&lt; Previous</button>
            <button className="px-4 py-2 bg-gray-100 font-bold border-b-2 border-[#e77600] shadow-inner">1</button>
            <button className="px-4 py-2 hover:bg-gray-50 shadow-inner">2</button>
            <button className="px-4 py-2 hover:bg-gray-50 shadow-inner">3</button>
            <button className="px-4 py-2 hover:bg-gray-50 flex items-center shadow-inner">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
