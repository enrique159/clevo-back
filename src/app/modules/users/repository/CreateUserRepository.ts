import { CreateOneBaseRepository } from "../../../shared/common/repository/index.js";
import HttpStatusCode from "../../../shared/enums/httpStatusCode.js";
import Exception from "../../../shared/error/Exception.js";
import { logger } from "../../../shared/log/logger.js";
import { UserModel } from "../data/model.js";
import { User } from "../domain/interfaces/Users.js";
import { CreateUserRepositoryModel } from "../domain/services/CreateUserRepositoryModel.js";
import ErrorCode from "../../../shared/error/errorCode.js";

export class CreateUserRepository extends CreateOneBaseRepository<User> implements CreateUserRepositoryModel{
  async execute(item: Partial<User>): Promise<User> {
    const model = UserModel();
    try {
      return await super.execute(item, model);
    } catch (error) {
      throw new Exception(HttpStatusCode.BAD_REQUEST, ErrorCode.ERR0008)
    }
  }
}