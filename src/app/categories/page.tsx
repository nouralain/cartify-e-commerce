import Image from "next/image";
import Link from "next/link";

const mockCategories = Array.from({ length: 12 }).map((_, i) => ({
  id: `cat-${i}`,
  title: `Department ${i + 1}`,
  image: `https://images.unsplash.com/photo-${1505740420928 + i}?w=400&h=400&fit=crop`
}));

export default function CategoriesPage() {
  return (
    <div className="max-w-[1500px] mx-auto p-4 md:p-8 bg-white my-4 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#0f1111]">All Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {mockCategories.map((cat) => (
           <Link key={cat.id} href="/products" className="bg-white rounded-lg p-2 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-200">
             <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 mb-4 relative drop-shadow-sm border border-gray-200 shadow-inner">
               <Image 
                 src={cat.image} 
                 alt={cat.title} 
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-300" 
               />
             </div>
             <span className="font-medium text-center text-sm group-hover:text-[#c45500] text-[#0f1111]">{cat.title}</span>
           </Link>
        ))}
      </div>
    </div>
  );
}
