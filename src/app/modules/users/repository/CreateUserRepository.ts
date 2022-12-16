import { CreateOneBaseRepository } from "../../../shared/common/repository/index.js";
import HttpStatusCode from "../../../shared/enums/httpStatusCode.js";
import Exception from "../../../shared/error/Exception.js";
import { logger } from "../../../shared/log/logger.js";
import { UserModel } from "../data/model.js";
import { User } from "../domain/interfaces/Users.js";
import { CreateUserRepositoryModel } from "../domain/services/CreateUserRepositoryModel.js";
import ErrorCode from "../../../shared/error/errorCode.js";
import MongoDBErrorCodes from "../../../shared/enums/MongoDBErrorCodes.js";
import Warning from "../../../shared/error/Warning.js";

export class CreateUserRepository extends CreateOneBaseRepository<User> implements CreateUserRepositoryModel{
  async execute(item: Partial<User>): Promise<User> {
    const model = UserModel();
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