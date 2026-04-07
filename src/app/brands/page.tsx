import Image from "next/image";
import Link from "next/link";

const mockBrands = Array.from({ length: 18 }).map((_, i) => ({
  id: `brand-${i}`,
  title: `Premium Brand ${i + 1}`,
  image: `https://images.unsplash.com/photo-${1445205170230 + i}?w=400&h=400&fit=crop`
}));

export default function BrandsPage() {
  return (
    <div className="max-w-[1500px] mx-auto p-4 md:p-8 bg-white my-4 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#0f1111]">Featured Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {mockBrands.map((brand) => (
           <Link key={brand.id} href="/products" className="bg-white border border-gray-200 rounded-sm p-4 flex flex-col items-center hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-shadow group relative">
             <div className="w-full h-24 mb-4 relative flex items-center justify-center p-2 mix-blend-multiply">
               <Image 
                 src={brand.image} 
                 alt={brand.title} 
                 fill
                 className="object-contain" 
                 sizes="(max-width: 768px) 100vw, 200px"
               />
             </div>
             <span className="font-bold text-center text-sm group-hover:text-[#c45500] text-[#007185] group-hover:underline">{brand.title}</span>
           </Link>
        ))}
      </div>
    </div>
  );
}
