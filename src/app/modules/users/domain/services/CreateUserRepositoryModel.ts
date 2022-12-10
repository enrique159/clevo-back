import type { Users, User } from "../interfaces/index.js";
import type { IPayload } from "../../../../network/domain/interfaces/index.js";

export interface CreateUserRepositoryModel {
  execute(payload: Partial<User>): Promise<User>;
}