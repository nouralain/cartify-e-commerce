import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/product/productCard";
import { apiClient } from "@/lib/api-client";

export default async function  ProductsPage({searchParams}:{
  searchParams: Promise<{ brand?: string }>}) {
    const products = await apiClient.getProducts()
     const { brand } = await searchParams
  const filteredProducts = brand
    ? products.data.filter(p => p.brand._id === brand)
    : products.data;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 w-full">
      <div className="hidden md:block w-60 shrink-0 mt-4">
        <FilterSidebar />
      </div>
      <div className="f grow mt-4">
        <div className="bg-white border-b border-gray-200 p-3 mb-4 shadow-sm text-sm text-muted-foreground rounded-sm">
           {filteredProducts.length} results 
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product}  />
          ))}
        </div>
      </div>
    </div>
  );
}
