import { Model } from "mongoose";

export default interface ICreateOneBaseRepository<T> {
  execute(item: Partial<T>, modelClass: Model<T>): Promise<T>;
}