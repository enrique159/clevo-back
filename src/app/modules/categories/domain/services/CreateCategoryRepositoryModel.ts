import { Category } from "../interfaces/Categories.js";

export interface CreateCategoryRepositoryModel {
  execute(payload: Category): Promise<Category>;
}