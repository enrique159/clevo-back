import DBConnectionManager from "../../../shared/database/services/DBConnectionManager.js";
import { User } from "../domain/interfaces/Users.js";
import { CreateUserRepository } from "../repository/CreateUserRepository.js";
import { BaseUseCase } from "../../../shared/common/BaseUseCase.js";

export default class CreateUserUseCase implements BaseUseCase<User, Promise<User>> {
  constructor() {}

  async execute(payload: User): Promise<User> {
    const dbConnectionManager = DBConnectionManager.getInstance();
    const createUserRepository = new CreateUserRepository(dbConnectionManager);
    const user = await createUserRepository.execute(payload);
    return user;
  }
}