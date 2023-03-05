import DBConnectionManager from "../../../shared/database/services/DBConnectionManager.js";
import { Category } from "../domain/interfaces/Categories.js";
import { BaseUseCase } from "../../../shared/common/BaseUseCase.js";
import { CreateCategoryRepository } from "../repository/CreateCategoryRepository.js";

export default class CreateCategoryUseCase implements BaseUseCase<Category, Promise<Category>> {
  constructor() {}

  async execute(payload: Category): Promise<Category> {
    const dbConnectionManager = DBConnectionManager.getInstance();
    const createCategoryRepository = new CreateCategoryRepository(dbConnectionManager);
    const category = await createCategoryRepository.execute(payload);
    return category;
  }
}