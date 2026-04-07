import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {
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
          {[1, 2].map((item) => (
            <div key={item} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-200">
              <div className="w-full sm:w-40 shrink-0">
                <div className="relative h-40 w-full bg-gray-50 flex items-center justify-center mix-blend-multiply">
                  <Image 
                    src={`https://images.unsplash.com/photo-${1505740420928 + item}?w=200&h=200&fit=crop`} 
                    alt="Cart item"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-[#0f1111] line-clamp-2 pr-4 hover:underline cursor-pointer">
                      Example AmazonClone Premium Wireless Headphones - Over Ear, Noise Cancelling
                    </h3>
                    <span className="text-lg font-bold text-[#0f1111]">${item === 1 ? '129.00' : '49.99'}</span>
                  </div>
                  <span className="text-xs text-[#007600] font-medium block mt-1">In Stock</span>
                  <div className="text-xs text-[#565959] mt-1 space-y-1">
                    <div className="flex items-center">
                      <span className="font-bold text-[#0f1111] bg-gray-100 rounded px-1 shrink-0">vprime</span>
                      <span className="ml-1">FREE Returns</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-2 text-[#0f1111]">
                    <input type="checkbox" className="w-3 h-3 text-[#007185] focus:ring-[#ff9900]" id={`gift-${item}`} /> 
                    <label htmlFor={`gift-${item}`}>This is a gift</label>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm scale-90 sm:scale-100 origin-left">
                  <select className="border border-gray-300 rounded-md bg-gray-100 px-2 py-1 outline-none shadow-sm cursor-pointer border-[#D5D9D9] bg-[#F0F2F2] hover:bg-[#E3E6E6]">
                    <option>Qty: 1</option>
                    <option>Qty: 2</option>
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
            <span className="text-lg text-[#0f1111]">Subtotal (2 items): <span className="font-bold">$178.99</span></span>
          </div>
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
              Subtotal (2 items): <span className="font-bold">$178.99</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm mb-6 text-[#0f1111]">
              <input type="checkbox" className="w-4 h-4 rounded text-[#007185] focus:ring-[#ff9900]" id="gift-order" /> 
              <label htmlFor="gift-order">This order contains a gift</label>
            </div>

            <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] rounded-full border border-[#FCD200]/50 font-medium h-9">
              Proceed to checkout
            </Button>
          </div>

          <div className="bg-white p-5 rounded-sm shadow-sm mt-4">
            <h3 className="font-bold text-sm mb-2 text-[#0f1111]">Customers who bought items in your cart also bought</h3>
            <div className="space-y-4">
               {[1, 2].map((item) => (
                 <div key={`rec-${item}`} className="flex gap-2">
                   <div className="w-16 h-16 relative bg-gray-50 flex shrink-0">
                     <Image 
                        src={`https://images.unsplash.com/photo-${1546868871 + item}-7041f2a55e12?w=100&h=100&fit=crop`} 
                        alt="Recommended"
                        fill
                        className="object-contain"
                     />
                   </div>
                   <div className="flex flex-col justify-center">
                     <a href="#" className="text-[#007185] hover:underline text-xs line-clamp-2 hover:text-[#c45500]">Smart Watch Tracker with Heart Rate Monitor Edition {item}</a>
                     <div className="flex items-baseline mt-1 text-[#b12704]">
                        <span className="text-xs">$</span><span className="text-sm font-bold">29.99</span>
                     </div>
                     <Button className="h-6 w-auto mt-1 px-3 text-xs bg-white text-[#0f1111] hover:bg-gray-50 border border-[#D5D9D9] rounded-[8px] shadow-sm font-normal text-left shadow-[0_2px_5px_0_rgba(213,217,217,.5)]">Add to Cart</Button>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
