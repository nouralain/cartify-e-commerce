import NoProduct from '@/components/product/NoProduct';
import { ProductCard } from '@/components/product/productCard';
import { apiClient } from '@/lib/api-client';

export default async function SearchPage({searchParams}:{searchParams:Promise<{q:string , category:string}>}) {
    const param = await searchParams    
    const query = param.q?.toLowerCase()
const products = await apiClient.getProducts({"category":param.category})

const filteredProd =products.data.filter((prod)=>{
  
     return prod.brand.name.toLowerCase().startsWith(query) ||
    prod.category.name.toLowerCase().startsWith(query) ||
    prod.title.toLowerCase().startsWith(query)
   
})

  return (
    
          
          <div className=" grow mt-4 p-4 md:p-6">
           {filteredProd.length>0 ?
            <><div className="bg-white border-b border-gray-200 p-3 mb-4 shadow-sm text-sm text-muted- rounded-sm">
               {filteredProd.length} results for <span className="text-[#c45500] font-bold">{query}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProd.map(product => (
                <ProductCard key={product._id} product={product}  />
              ))}
            </div></>:
            <NoProduct/>}
          </div>
  )
}
