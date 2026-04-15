import { ProductCard } from '@/components/product/productCard'
import { apiClient } from '@/lib/api-client'


export default async function ProdBrands({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params 
  
const products =await apiClient.getProducts({"brand":slug})
const brand = await apiClient.getSpecificBrand(slug)
  return (
    <>
  

  <section className='p-4'>

          <div className="flex items-center justify-between mb-4 mt-4 text-center mx-auto max-w-4xl border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f1111] w-full">
              {products.data.length} products of {brand.data.name}

            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6">
            {products.data.map((product) => (
                <ProductCard
                  key={`${product._id}-bestseller-${product._id}`}
                  product={product}
                />
              ))}
          </div>
        </section>
    </>
  )
}
