import { CreateOneBaseRepository } from "../../../shared/common/repository/index.js";
import { logger } from "../../../shared/log/logger.js";
import { UserModel } from "../data/model.js";
import { User } from "../domain/interfaces/Users.js";
import { CreateUserRepositoryModel } from "../domain/services/CreateUserRepositoryModel.js";

export class CreateUserRepository extends CreateOneBaseRepository<User> implements CreateUserRepositoryModel{
  async execute(item: Partial<User>): Promise<User> {
    const model = UserModel();
    try {
      return await super.execute(item, model);
    } catch (error) {
      logger({HttpType: "POST", route: "/users/create", useremail: item.email, error: error.message, success: false})
    }
  }
}