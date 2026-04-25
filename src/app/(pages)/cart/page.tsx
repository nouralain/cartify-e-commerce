import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { apiClient } from "@/lib/api-client";

export default async function CartPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.token) {
    redirect("/auth/signin");
  }

  // Fetch cart data
  let cartResult: any = null;
  try {
    cartResult = await apiClient.getCart(session.user.token as string);
  } catch (error) {
    console.error("Failed to fetch cart", error);
  }

  const cartItems = cartResult?.data?.products || [];
  const totalPrice = cartResult?.data?.totalCartPrice || 0;
  const totalItems = cartResult?.numOfCartItems || 0;

  return (
    <div className="bg-[#eaeded] min-h-screen p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Main Cart Items Area */}
        <div className="flex-grow bg-white p-6 rounded-sm shadow-sm">
          <div className="flex justify-between items-end border-b border-gray-200 pb-2 mb-4">
            <h1 className="text-2xl sm:text-3xl font-normal text-[#0f1111]">Shopping Cart</h1>
            <span className="text-sm text-[#565959] hidden sm:block">Price</span>
          </div>
          
          {/* Cart Item Mock */}
          {cartItems.length > 0 ? (
          <>
          {cartItems.map((item: any) => (
            <div key={item._id} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-200">
              <div className="w-full sm:w-40 shrink-0">
                <div className="relative h-40 w-full bg-gray-50 flex items-center justify-center mix-blend-multiply">
                  <Image 
                    src={item.product?.imageCover || '/placeholder.png'} 
                    alt={item.product?.title || 'Product'}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-[#0f1111] line-clamp-2 pr-4 hover:underline cursor-pointer">
                      {item.product?.title}
                    </h3>
                    <span className="text-lg font-bold text-[#0f1111]">EGP {item.price}</span>
                  </div>
                  <span className="text-xs text-[#007600] font-medium block mt-1">In Stock</span>
                  <div className="text-xs text-[#565959] mt-1 space-y-1">
                    <div className="flex items-center">
                      <span className="font-bold text-[#0f1111] bg-gray-100 rounded px-1 shrink-0">vprime</span>
                      <span className="ml-1">FREE Returns</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-2 text-[#0f1111]">
                    <input type="checkbox" className="w-3 h-3 text-[#007185] focus:ring-[#ff9900]" id={`gift-${item._id}`} /> 
                    <label htmlFor={`gift-${item._id}`}>This is a gift</label>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm scale-90 sm:scale-100 origin-left">
                  <select 
                    defaultValue={item.count}
                    className="border border-gray-300 rounded-md bg-gray-100 px-2 py-1 outline-none shadow-sm cursor-pointer border-[#D5D9D9] bg-[#F0F2F2] hover:bg-[#E3E6E6]">
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>Qty: {i+1}</option>
                    ))}
                  </select>
                  <div className="h-4 border-l border-gray-300"></div>
                  <button className="text-[#007185] hover:underline">Delete</button>
                  <div className="h-4 border-l border-gray-300"></div>
                  <button className="text-[#007185] hover:underline">Save for later</button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-end pt-4">
            <span className="text-lg text-[#0f1111]">
              Subtotal ({totalItems} items): <span className="font-bold">EGP {totalPrice}</span>
            </span>
          </div>
          </>
          ) : (
          <div className="flex flex-col sm:flex-row items-center py-8 px-4 gap-8">
            <div className="shrink-0 text-[#D5D9D9]">
               <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left text-[#0f1111]">
              <h2 className="text-2xl font-bold mb-2">Your Amazon Cart is empty.</h2>
              <Link href="/" className="text-amazon-blue hover:text-[#c45500] hover:underline mb-4 text-sm font-medium">
                Shop today's deals
              </Link>
              <div className="flex gap-3 mt-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start">
               {/* As they are already logged in to see this page effectively, we won't show sign in button */}
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Checkout Summary Area */}
        <div className="w-full lg:w-[300px] shrink-0">
          <div className="bg-white p-5 rounded-sm shadow-sm relative">
            <div className="flex items-center gap-2 mb-4 text-xs text-[#007600]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current shrink-0" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Your order qualifies for FREE Shipping.<br/>Choose this option at checkout. <a href="#" className="text-[#007185] hover:underline hover:text-[#c45500]">See details</a></span>
            </div>
            
            <div className="mb-4 text-lg text-[#0f1111]">
              Subtotal ({totalItems} items): <span className="font-bold">EGP {totalPrice}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm mb-6 text-[#0f1111]">
              <input type="checkbox" className="w-4 h-4 rounded text-[#007185] focus:ring-[#ff9900]" id="gift-order" /> 
              <label htmlFor="gift-order">This order contains a gift</label>
            </div>

            <Link href="/payment" className="w-full block">
              <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] rounded-full border border-[#FCD200]/50 font-medium h-9 shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                Proceed to checkout
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
