import Link from "next/link";
import { Search, ShoppingCart, MapPin } from "lucide-react";
import { CategoryDropdown } from "@/components/layout/CategoryDropdown";

export function Header() {
  return (
    <header className="flex flex-col w-full relative z-40" id="top">
      {/* Announcement Bar */}
      <div className="bg-[#ff9900] text-[#0f1111] text-xs sm:text-sm font-bold text-center py-1.5 px-4 flex justify-center items-center hover:bg-[#ffb84d] transition-colors cursor-pointer group">
        <span>Free Delivery on your first order. </span>
        <span className="ml-1 underline decoration-transparent group-hover:decoration-[#0f1111] transition-colors">
          Shop Now
        </span>
      </div>

      {/* Top Bar */}
      <div className="bg-[#232f3e] text-white flex flex-col sm:flex-row items-center px-4 py-2 gap-4 h-auto sm:h-[60px]">
        
        <div className="flex w-full sm:w-auto items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center px-1 border border-transparent hover:border-white rounded-sm pb-1">
            <span className="text-2xl font-bold tracking-tighter">AmazonClone</span>
          </Link>
          
          {/* Mobile Cart/User Icons */}
          <div className="sm:hidden flex items-center gap-2">
            <Link href="/cart" className="flex items-center px-2 border border-transparent rounded-sm relative">
              <span className="absolute -top-1 left-4 font-bold text-[#ff9900]">0</span>
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Location (Desktop) */}
        <div className="hidden md:flex items-end px-2 border border-transparent hover:border-white rounded-sm cursor-pointer pb-1">
          <MapPin className="h-5 w-5 mb-1 mr-1" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-300 leading-tight">Deliver to</span>
            <span className="text-sm font-bold leading-tight">Your Address</span>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="flex-grow hidden sm:flex h-10 rounded-md overflow-hidden bg-white group focus-within:ring-2 focus-within:ring-[#ff9900]">
          <div className="bg-gray-100 text-[#0f1111] px-3 flex items-center text-xs border-r border-gray-300 cursor-pointer hover:bg-gray-200">
            All Departments
          </div>
          <input 
            type="text" 
            className="flex-grow px-3 text-[#0f1111] focus:outline-none" 
            placeholder="Search products"
          />
          <button className="bg-[#ff9900] hover:bg-[#ffb84d] px-4 flex items-center justify-center transition-colors">
            <Search className="h-5 w-5 text-[#0f1111]" />
          </button>
        </div>

        {/* Account & Lists */}
        <div className="hidden md:flex flex-col px-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
          <span className="text-xs text-gray-300 leading-tight">Hello, sign in</span>
          <span className="text-sm font-bold leading-tight">Account & Lists</span>
        </div>

        {/* Returns & Orders */}
        <div className="hidden lg:flex flex-col px-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
          <span className="text-xs text-gray-300 leading-tight">Returns</span>
          <span className="text-sm font-bold leading-tight">& Orders</span>
        </div>

        {/* Cart - Desktop */}
        <Link href="/cart" className="hidden sm:flex items-center px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer relative">
          <div className="relative">
            <span className="absolute -top-2 left-3 font-bold text-[#ff9900]">0</span>
            <ShoppingCart className="h-8 w-8" />
          </div>
          <span className="text-sm font-bold mt-3 hidden md:block">Cart</span>
        </Link>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden bg-[#232f3e] px-4 pb-2">
        <div className="flex h-10 rounded-md overflow-hidden bg-white ring-1 ring-transparent focus-within:ring-[#ff9900]">
          <input 
            type="text" 
            className="flex-grow px-3 text-[#0f1111] outline-none" 
            placeholder="Search products"
          />
          <button className="bg-[#ff9900] hover:bg-[#ffb84d] px-4 flex items-center justify-center">
            <Search className="h-5 w-5 text-[#0f1111]" />
          </button>
        </div>
      </div>

      {/* Sub Bar */}
      <div className="bg-[#37475a] text-white flex items-center px-4 py-1 gap-2 sm:gap-4 text-sm min-h-[40px] flex-wrap md:flex-nowrap overflow-hidden">
        <CategoryDropdown />
        <Link href="/products" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1">Today&apos;s Deals</Link>
        <Link href="/categories" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1">Categories</Link>
        <Link href="/brands" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1">Featured Brands</Link>
        <Link href="/support" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1">Customer Service</Link>
        <Link href="/cart" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1">Gift Cards</Link>
        <Link href="/cart" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1">Registry</Link>
        <Link href="/cart" className="hover:border hover:border-white border border-transparent px-1 rounded-sm whitespace-nowrap py-1 hidden sm:block">Sell</Link>
      </div>
    </header>
  );
}
