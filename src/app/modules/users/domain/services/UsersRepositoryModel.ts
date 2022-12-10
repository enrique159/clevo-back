import type { Users, User } from "../interfaces/index.js";
import type { IPayload } from "../../../../network/domain/interfaces/index.js";

export interface UsersRepositoryModel {
  getUsers(): Promise<Users>;
  getById(id: number): Promise<User>;
  create(payload: IPayload<User>): Promise<User>;
  update(payload: IPayload<User>): Promise<User>;
  delete(id: number): Promise<User>;
}