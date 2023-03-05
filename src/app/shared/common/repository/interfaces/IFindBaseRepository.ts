import { Model } from "mongoose";

export default interface IFindBaseRepository<U> {
  execute(modelClass: Model<U>): Promise<U[]>;
}