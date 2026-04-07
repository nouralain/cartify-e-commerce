import { ICategoryResponse } from "@/interfaces/ICategoryResponse";

class ApiClient{
    #baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;
    
    async getCategories():Promise<ICategoryResponse>{
        const response=await fetch(`${this.#baseUrl}/api/v1/categories`)
        const data=await response.json()
       return data
    }

   async getProducts(){
const response = await fetch(``)
    }
}

export const apiClient = new ApiClient();