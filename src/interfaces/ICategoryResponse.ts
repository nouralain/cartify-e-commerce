import { ICategory } from "./ICategory";
import { IMetaData } from "./IMetaData";

export interface ICategoryResponse {
  data: ICategory[];
  metadata: IMetaData;
}