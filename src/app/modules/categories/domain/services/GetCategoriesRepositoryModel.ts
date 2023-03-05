import { Categories, Category } from "../interfaces/index.js";

export interface GetCategoriesRepositoryModel {
  execute(): Promise<Category[]>;
}