import BrandGrid from "@/components/brands/BrandGrid";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";


export default async function BrandsPage() {
  const brands = await apiClient.getBrands();
  return (
    <div className="max-w-375 mx-auto p-4 md:p-8 bg-white my-4 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#0f1111]">Featured Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {brands.data.map((brand) => (
          <BrandGrid brand={brand}/>
        ))}
      </div>
      <div className="text-end">
              <Button variant={"link"} className=" mt-4">See more brands</Button>

      </div>
    </div>
  );
}
