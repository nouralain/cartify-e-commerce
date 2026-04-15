import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

export default function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center w-full">
      <div className="text-[#e47911] font-bold text-6xl md:text-8xl mb-4">404</div>
      <h1 className="text-xl md:text-2xl font-bold text-[#0f1111] mb-2">Looking for something?</h1>
      <p className="text-muted-foreground mb-8 max-w-md text-sm md:text-base">
        We're sorry. The Web address you entered is not a functioning page on our site.
      </p>
      
      <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mb-8 items-center justify-center">
         <div className="relative w-full sm:w-75">
           <input 
             type="text" 
             placeholder="Search" 
             className="w-full h-10 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e47911] focus:border-transparent pointer-events-none"
             disabled
           />
         </div>
         <Button className="bg-[#febd69] hover:bg-[#f3a847] text-black h-10 px-6 w-full sm:w-auto rounded-md shadow-sm pointer-events-none border-0 inline-flex items-center justify-center">
            <Search className="h-5 w-5" />
         </Button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <span className="text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer font-medium">
            Go to Home Page
          </span>
        </Link>
        
        {/* Amazon style dog placeholder reference */}
        <div className="mt-8 text-sm text-muted-foreground">
          <Link href="/">
            <span className="text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer">
              Meet the dogs of Cartify
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
