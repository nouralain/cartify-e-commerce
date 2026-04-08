import { apiClient } from "@/lib/api-client";
import Image from "next/image";
import Link from "next/link";

const categories = await apiClient.getCategories();
export default function CategoriesPage() {
  return (
    <div className="max-w-375 mx-auto p-4 md:p-8 bg-white my-4 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#0f1111]">All Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {categories.data.map((cat) => (
           <Link key={cat._id} href={`/categories/${cat._id}`} className="bg-white rounded-lg p-2 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-200">
             <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 mb-4 relative drop-shadow-sm border border-gray-200 shadow-inner">
               <Image 
                 src={cat.image} 
                 alt={cat.name} 
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-300" 
               />
             </div>
             <span className="font-medium text-center text-sm group-hover:text-[#c45500] text-[#0f1111]">{cat.name}</span>
           </Link>
        ))}
      </div>
    </div>
  );
}
