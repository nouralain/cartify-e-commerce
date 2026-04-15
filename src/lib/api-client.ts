import { signInResponse } from "@/types/signInResponse";
import { IBrand } from "@/interfaces/common/IBrand";
import { ICategory } from "@/interfaces/ICategory";
import IProductParam from "@/interfaces/IProductParams";
import { IProduct } from "@/interfaces/IProducts";
import { IResponse } from "@/interfaces/IResponse";

class ApiClient {
  #baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;
  #headers = {
    'Content-Type': 'application/json',
  };

  async getCategories(): Promise<IResponse<ICategory[]>> {
    const response = await fetch(`${this.#baseUrl}/api/v1/categories`);
    const data = await response.json();
    return data;
  }

  async getProducts(params?:IProductParam): Promise<IResponse<IProduct[]>> {
    
    const url = new URL(`${this.#baseUrl}/api/v1/products`)
    // to check first if theres a param sent
if(params){
  params?.category && url.searchParams.set("category[in]",params.category)
  params?.brand && url.searchParams.set("brand",params.brand)
}
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
    async getSpecificProduct(id:string): Promise<IResponse<IProduct>> {
 const response = await fetch(`${this.#baseUrl}/api/v1/products/${id}`);
    const data = await response.json();
    return data;
  }

  async getBrands(): Promise<IResponse<IBrand[]>> {
 const response = await fetch(`${this.#baseUrl}/api/v1/brands`);
    const data = await response.json();
    return data;
  }
  async getSpecificBrand(id:string): Promise<IResponse<IBrand>> {
 const response = await fetch(`${this.#baseUrl}/api/v1/brands/${id}`);
    const data = await response.json();
    return data;
  }
  async getSpecificCategory(id:string): Promise<IResponse<ICategory>> {
 const response = await fetch(`${this.#baseUrl}/api/v1/categories/${id}`);
    const data = await response.json();
    return data;
  }
  async getSubCategories(): Promise<IResponse<ICategory[]>> {
 const response = await fetch(`${this.#baseUrl}/api/v1/subcategories`);
    const data = await response.json();
    return data;
  }

  async signIn(email:string,password:string):Promise<signInResponse>{
     const response = await fetch(`${this.#baseUrl}/api/v1/auth/signin`,{
      method:"POST",
      body:JSON.stringify({
        email,
        password
      }),
      headers:this.#headers
    });
      const data = await response.json();
    return data;

  }

}

export const apiClient = new ApiClient();
