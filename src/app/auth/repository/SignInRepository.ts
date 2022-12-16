import { User } from "../../modules/users/domain/interfaces/Users.js";
import { FindOneBaseRepository } from "../../shared/common/repository/index.js";
import { SignInRepositoryModel } from "../domain/services/SignInRepositoryModel.js";

import { Auth, QueryParams } from "../domain/interfaces/index.js";
import { UserModel } from "../../modules/users/data/model.js";
import { logger } from "../../shared/log/logger.js";
import { DTOBase } from "../../shared/common/DTO/DTOBase.js";
import Exception from "../../shared/error/Exception.js";
import HttpStatusCode from "../../shared/enums/httpStatusCode.js";
import ErrorCode from "../../shared/error/errorCode.js";

type UserAuth = User & DTOBase;

export class SignInRepository extends FindOneBaseRepository<QueryParams, User> implements SignInRepositoryModel {
  async execute(item: QueryParams): Promise<User> {
    try {
      return await super.execute(item, UserModel());
    } catch (error) {
      console.log(error)
      throw new Exception(HttpStatusCode.BAD_REQUEST, ErrorCode.ERR0008);
    }
  }
}