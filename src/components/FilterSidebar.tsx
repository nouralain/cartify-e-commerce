import {  Star } from "lucide-react";
import { apiClient } from '@/lib/api-client';
import BrandsList from "./brands/BrandsList";

export async function FilterSidebar() {
  const brands = await apiClient.getBrands()
 
  return (
    <div className="w-full pr-4 pb-8 space-y-6">
      <div>
        <h3 className="font-bold text-sm mb-2">Delivery Day</h3>
        <label className="flex items-center space-x-2 text-sm cursor-pointer">
          <input type="checkbox" className="rounded text-amazon-blue focus:ring-[#ff9900]" />
          <span>Get It by Tomorrow</span>
        </label>
      </div>

      <div>
        <h3 className="font-bold text-sm mb-2">Customer Review</h3>
        <ul className="space-y-1">
          {[4, 3, 2, 1].map((stars) => (
            <li key={stars}>
              <a href="#" className="flex items-center text-sm hover:text-[#c45500] group">
                <div className="flex text-[#FFA41C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < stars ? "fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="ml-1 text-[#0f1111] group-hover:text-[#c45500]">& Up</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-sm mb-2">Brands</h3>
        <div className="space-y-2">
          <BrandsList brands={brands.data}/>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-sm mb-2">Price</h3>
        <ul className="space-y-1 text-sm text-[#0f1111] mb-2">
          <li><a href="#" className="hover:text-[#c45500]">Under 100 L.E</a></li>
          <li><a href="#" className="hover:text-[#c45500]">100 L.E to 250 L.E</a></li>
          <li><a href="#" className="hover:text-[#c45500]">250L.E to 1K L.E</a></li>
          <li><a href="#" className="hover:text-[#c45500]">1K L.E to 2K L.E</a></li>
          <li><a href="#" className="hover:text-[#c45500]">2K L.E & Above</a></li>
        </ul>
        <div className="flex items-center gap-2 mt-2">
          <input 
            type="text" 
            placeholder="$ Min" 
            className="w-16 border border-gray-300 rounded-sm px-2 py-1 text-sm focus:outline-none focus:border-[#ff9900]" 
          />
          <input 
            type="text" 
            placeholder="$ Max" 
            className="w-16 border border-gray-300 rounded-sm px-2 py-1 text-sm focus:outline-none focus:border-[#ff9900]" 
          />
          <button className="bg-white border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-50 focus:ring-1 focus:ring-[#ff9900] shadow-sm">
            Go
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-sm mb-2">Availability</h3>
        <label className="flex items-center space-x-2 text-sm cursor-pointer">
          <input type="checkbox" className="rounded text-amazon-blue focus:ring-[#ff9900]" />
          <span>Include Out of Stock</span>
        </label>
      </div>
    </div>
  );
}
