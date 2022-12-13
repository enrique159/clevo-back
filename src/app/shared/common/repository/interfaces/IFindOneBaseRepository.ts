import { Model } from "mongoose";

export default interface IFindOneBaseRepository<T, U> {
  execute(item: T, modelClass: Model<U>): Promise<U>;
}