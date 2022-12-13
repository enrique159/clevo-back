import { Query } from "mongoose";
import { User } from "../../../modules/users/domain/interfaces/Users.js";
import type { Auth, QueryParams } from "../interfaces/index.js";

export interface SignInRepositoryModel {
  execute(payload: QueryParams): Promise<User>;
}