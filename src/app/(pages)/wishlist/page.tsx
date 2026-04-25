import React from 'react';
import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { ProductCard } from "@/components/product/productCard";

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.token) {
    redirect("/auth/signin");
  }

  let wishlistResult: any = null;
  try {
    wishlistResult = await apiClient.getWishlist(session.user.token as string);
  } catch (error) {
    console.error("Failed to fetch wishlist", error);
  }

  const products = wishlistResult?.data || [];

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
              {products.map((product: any) => (
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
                     Added just now
                   </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 flex flex-col items-center border border-dashed border-[#D5D9D9] rounded-lg bg-[#f7fafa] mt-8">
              <div className="mb-4 text-[#D5D9D9]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h2 className="font-medium text-[20px] text-[#0f1111] mb-2">Your Shopping List is empty.</h2>
              <p className="text-sm text-[#565959] mb-6 max-w-md">
                Add items you want to shop for. You can easily find them later or share them with friends and family.
              </p>
              <Link href="/">
                <button className="bg-white hover:bg-gray-50 text-[#0f1111] text-sm px-6 py-2 border border-[#D5D9D9] shadow-[0_2px_5px_rgba(213,217,217,0.5)] whitespace-nowrap rounded-lg font-medium transition-colors">
                  Explore Products
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
