import React from 'react';
import { apiClient } from "@/lib/api-client";
import { ProductCard } from "@/components/product/productCard";

export default async function WishlistPage() {
  const productsResult = await apiClient.getProducts();
  const products = productsResult?.data?.slice(0, 8) || [];

  return (
    <div className="bg-[#eaeded] min-h-screen pt-4 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white border text-[#0f1111] border-gray-200 p-4 md:p-6 shadow-sm mb-6 rounded-sm">
          <h1 className="text-2xl md:text-[28px] font-normal mb-1">Your Lists</h1>
          
          <div className="flex border-b border-gray-200 mb-4 space-x-6 mt-4">
            <button className="py-2 border-b-2 border-[#e47911] text-[#0f1111] font-bold text-sm tracking-wide">Shopping List</button>
            <button className="py-2 text-amazon-blue hover:text-[#c45500] hover:underline text-sm tracking-wide">Saved Ideas</button>
          </div>
          
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4 border-b border-gray-200 pb-4">
            <p className="text-sm font-medium">You have {products.length} items in your list.</p>
            <div className="flex gap-2">
              <button className="text-sm bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-[#D5D9D9] shadow-[0_2px_5px_rgba(213,217,217,0.5)] transition-colors text-[#0f1111] font-medium">
                Filter & Sort
              </button>
              <button className="text-sm text-amazon-blue px-3 py-1.5 hover:underline bg-white">
                Send list to others
              </button>
            </div>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product._id} className="relative group rounded-md p-1 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all bg-white flex flex-col h-full">
                   <div className="absolute top-2 right-2 z-10 hidden group-hover:block">
                     <button className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gray-200 hover:bg-gray-100 hover:text-red-500 text-gray-500 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                     </button>
                   </div>
                   <div className=" grow">
                     <ProductCard product={product} />
                   </div>
                   <div className="pt-2 px-2 pb-1 text-[11px] text-muted-foreground border-t border-gray-100 mt-2">
                     Added July 15, 2026
                   </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 flex flex-col items-center">
              <h2 className="font-bold text-lg mb-2">Your Shopping List is empty.</h2>
              <p className="text-sm text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer">
                Continue shopping
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
