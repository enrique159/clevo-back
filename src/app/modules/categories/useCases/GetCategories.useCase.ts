import { BaseUseCase } from "../../../shared/common/BaseUseCase.js";
import DBConnectionManager from "../../../shared/database/services/DBConnectionManager.js";
import { GetCategoriesRepository } from "../repository/GetCategoriesRepository.js";
import { Categories, Category } from "../domain/interfaces/Categories.js";

export default class GetCategoriesUseCase implements BaseUseCase<null, Promise<Category[]>> {
  constructor() {}

  async execute(): Promise<Category[]> {
    const dbConnectionManager = DBConnectionManager.getInstance();
    const getCategoriesRepository = new GetCategoriesRepository(dbConnectionManager);
    const categories = await getCategoriesRepository.execute();
    return categories;
  }
}