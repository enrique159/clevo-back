import { FindBaseRepository } from "../../../shared/common/repository/index.js";
import MongoDBErrorCodes from "../../../shared/enums/MongoDBErrorCodes.js";
import HttpStatusCode from "../../../shared/enums/httpStatusCode.js";
import Exception from "../../../shared/error/Exception.js";
import ErrorCode from "../../../shared/error/errorCode.js";
import { CategoryModel } from "../data/model.js";
import { Category } from "../domain/interfaces/Categories.js";
import { GetCategoriesRepositoryModel } from "../domain/services/GetCategoriesRepositoryModel.js";

export class GetCategoriesRepository extends FindBaseRepository<Category> implements GetCategoriesRepositoryModel {
  async execute(): Promise<Category[]> {
    const model = CategoryModel();
    try {
      return await super.execute(model)
    } catch (error) {
      throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorCode.ERR0000)
    }
  }
}