import { CreateOneBaseRepository } from "../../../shared/common/repository/index.js";
import MongoDBErrorCodes from "../../../shared/enums/MongoDBErrorCodes.js";
import HttpStatusCode from "../../../shared/enums/httpStatusCode.js";
import Exception from "../../../shared/error/Exception.js";
import Warning from "../../../shared/error/Warning.js";
import ErrorCode from "../../../shared/error/errorCode.js";
import { CategoryModel } from "../data/model.js";
import { Category } from "../domain/interfaces/Categories.js";
import { CreateCategoryRepositoryModel } from "../domain/services/CreateCategoryRepositoryModel.js";

export class CreateCategoryRepository extends CreateOneBaseRepository<Category> implements CreateCategoryRepositoryModel {
  async execute(item: Category): Promise<Category> {
    const model = CategoryModel();
    try {
      return await super.execute(item, model);
    } catch (error) {
      // Check MongoDB Error Code
      if (error.code === MongoDBErrorCodes.DUPLICATE_KEY)
        throw new Warning(HttpStatusCode.CONFLICT, ErrorCode.ERR0007)
      else 
        throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorCode.ERR0000)
    }
  }
}