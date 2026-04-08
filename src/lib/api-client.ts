import { IBrand } from "@/interfaces/common/IBrand";
import { ICategory } from "@/interfaces/ICategory";
import { IProduct } from "@/interfaces/IProducts";
import { IResponse } from "@/interfaces/IResponse";

class ApiClient {
  #baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;

  async getCategories(): Promise<IResponse<ICategory[]>> {
    const response = await fetch(`${this.#baseUrl}/api/v1/categories`);
    const data = await response.json();
    return data;
  }

  async getProducts(): Promise<IResponse<IProduct[]>> {
    const response = await fetch(`${this.#baseUrl}/api/v1/products`);
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

}

export const apiClient = new ApiClient();
