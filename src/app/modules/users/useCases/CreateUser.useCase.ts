import { IPayload } from "../../../network/domain/interfaces/IPayload.js";
import DBConnectionManager from "../../../shared/database/services/DBConnectionManager.js";
import { User } from "../domain/interfaces/Users.js";
import { CreateUserRepositoryModel } from "../domain/services/CreateUserRepositoryModel.js";
import { CreateUserRepository } from "../repository/CreateUserRepository.js";

export default class CreateUserUseCase {
  constructor() {}

  async execute(payload: User): Promise<User> {
    const dbConnectionManager = DBConnectionManager.getInstance();
    const createUserRepository = new CreateUserRepository(dbConnectionManager);
    const user = await createUserRepository.execute(payload);
    return user;
  }
}