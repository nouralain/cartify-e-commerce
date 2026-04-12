import { apiClient } from "@/lib/api-client";
import { ProductCard } from "@/components/product/productCard";
import Link from "next/link";
import Image from "next/image";
export default async function ProdCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;
console.log(slug);

  const productsResponse = await apiClient.getProducts();
  const products = productsResponse.data || [];
  const category = await apiClient.getSpecificCategory(slug);
    const subCategories = await apiClient.getSubCategories()


  // to get the products that are related to the category
  const relatedCategoryProducts = products.filter(
    (prod) => prod.category.name === category.data.name,
  );
  // to filter the products and extract brands from it and prevent repetation
  const uniqueBrands = Array.from(
    new Map(
      relatedCategoryProducts.map((prod) => [prod.brand._id, prod.brand]),
    ).values(),
  );
 
  const relatedSubCategories = subCategories.data.filter((cat)=>cat.category===slug)
  console.log(relatedCategoryProducts);
  
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      {/* 1. Hero Banner for the Department */}
      <Link href={"/products"}>
        <div
          style={{
            backgroundImage: `url('/XCM_Manual_1578140_5617986_1500x786_2X.jpg')`,
          }}
          className="w-full relative hidden md:flex lg:h-150  items-center justify-center overflow-hidden border-b-[6px] border-amazon-blue"
        ></div>
      </Link>

      <div className="max-w-375 mx-auto w-full px-4 md:px-6 py-6 md:py-8 flex flex-col gap-10 md:gap-14">
        {/* 2. Top Brands Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f1111]">
              Featured Brands
            </h2>
          </div>
          <div className="flex justify-between gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {uniqueBrands.map((product) => (
              <div className="shrink-0 flex flex-col items-center gap-3 cursor-pointer group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center p-4 group-hover:border-amazon-blue group-hover:shadow-[0_0_10px_rgba(0,168,225,0.3)] transition-all">
                  <span className="font-extrabold text-2xl text-gray-300 group-hover:text-amazon-blue">
                    {product.name}
                  </span>
                </div>
                <span className="text-sm font-medium text-center group-hover:text-[#c45500] text-[#0f1111]">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Shop by Price (The Amazon style square cards) */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[#0f1111] mb-4">
            Shop by Price
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Link href="#">
              <Image
                src="/Navtiles_400x240_99.gif"
                alt="sale99"
                width={500}
                height={500}
                className="group cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Image
                src="/Navtiles_400x240_399.gif"
                alt="sale399"
                width={500}
                height={500}
                className="group cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Image
                src="/Navtiles_400x240_599.gif"
                alt="sale599"
                width={500}
                height={500}
                className="group cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Image
                src="/Navtiles_400x240_99.gif"
                alt="Logo"
                width={500}
                height={500}
                className="group cursor-pointer"
              />
            </Link>
          </div>
        </section>

        {/* 5. Shop by Subcategory */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[#0f1111] mb-4 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedSubCategories.map(
              (sub) => (
                <Link
                  href="#"
                  key={sub._id}
                  className="flex flex-col items-center group"
                >
                  <div className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-md mb-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all overflow-hidden relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-gray-200 to-transparent"></div>
                    <span className="font-bold text-gray-400 z-10">{sub.name}</span>
                  </div>
                  <span className="font-bold text-[#0f1111] group-hover:text-[#c45500] hover:underline">
                  
                  </span>
                </Link>
              ),
            )}
          </div>
        </section>

        {/* 6. Best Sellers Grid */}
        <section>
          <div className="flex items-center justify-between mb-4 mt-4 text-center mx-auto max-w-4xl border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f1111] w-full">
              Best Sellers in{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6">
            {relatedCategoryProducts.map((product) => (
                <ProductCard
                  key={`${product._id}-bestseller-${product._id}`}
                  product={product}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
