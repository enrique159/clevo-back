import { UserModel } from "../../modules/users/data/model.js";
import { User } from "../../modules/users/domain/interfaces/Users.js";
import { FindOneBaseRepository } from "../../shared/common/repository/index.js";
import HttpStatusCode from "../../shared/enums/httpStatusCode.js";
import Exception from "../../shared/error/Exception.js";
import ErrorCode from "../../shared/error/errorCode.js";
import { IsAuthRepositoryModel, QueryParams } from "../domain/services/IsAuthRepositoryModel.js";

export class IsAuthRepository extends FindOneBaseRepository<QueryParams, User> implements IsAuthRepositoryModel {
  async execute(item: QueryParams): Promise<User> {
    try {
      return await super.execute(item, UserModel());
    } catch (error) {
      console.log(error)
      throw new Exception(HttpStatusCode.BAD_REQUEST, ErrorCode.ERR0008);
    }
  }
}