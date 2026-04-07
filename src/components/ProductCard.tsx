import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
}

export function ProductCard({ id, title, image, price, rating, reviewCount }: ProductCardProps) {
  // Mock logic to show stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="bg-white border border-gray-200 rounded-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 p-3 flex flex-col h-full group">
      <Link href={`/products/${id}`} className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-2 rounded-sm mb-3 group-hover:bg-gray-100 transition-colors">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-contain mix-blend-multiply" 
          sizes="(max-width: 768px) 100vw, 250px"
        />
      </Link>
      
      <div className="flex-grow flex flex-col">
        <Link href={`/products/${id}`}>
          <h3 className="text-[#0f1111] hover:text-[#c45500] font-medium text-sm line-clamp-2 mb-1">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-1">
          <div className="flex text-[#FFA41C]">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            {hasHalfStar && <StarHalf className="h-4 w-4 fill-current" />}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
              <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
            ))}
          </div>
          <span className="text-[#007185] text-sm hover:underline hover:cursor-pointer">{reviewCount.toLocaleString()}</span>
        </div>
        
        <div className="mb-2">
          <span className="text-xs text-gray-500">2K+ bought in past month</span>
        </div>
        
        <div className="mb-auto">
          <div className="flex items-start">
            <span className="text-sm pt-1">$</span>
            <span className="text-2xl font-bold">{Math.floor(price)}</span>
            <span className="text-sm pt-1">
              {(price % 1).toFixed(2).substring(2)}
            </span>
          </div>
          <div className="text-xs text-[#565959] mt-1 space-y-1">
            <div className="flex items-center">
              <span className="font-bold text-[#0f1111] bg-gray-100 rounded px-1 flex shrink-0">vprime</span>
              <span className="ml-1">FREE delivery <strong>Tomorrow</strong></span>
            </div>
            <p>Or fastest delivery <strong>Today</strong></p>
          </div>
        </div>
        
        <Button className="w-full mt-3 bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-full border-0 shadow-none font-medium text-sm">
          Add to cart
        </Button>
      </div>
    </div>
  );
}
