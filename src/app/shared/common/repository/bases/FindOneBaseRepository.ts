import { Model } from "mongoose";
import { IDBConnectionManager } from "../../../database/interfaces/IDBConnectionManager.js";
import IFindOneBaseRepository from "../interfaces/IFindOneBaseRepository.js";
import { MongooseConnectionStatus } from "../../../database/interfaces/MongooseStatus.js";


export default class FindOneBaseRepository<T, U> implements IFindOneBaseRepository<T, U> {
  protected DBConnectionManager: IDBConnectionManager

  constructor(DBConnectionManager: IDBConnectionManager) {
    this.DBConnectionManager = DBConnectionManager;
  }

  public async execute(item: T, modelClass: Model<U>): Promise<U> {
    if (process.env.DATABASE_TYPE === "MONGO") {
      if (this.DBConnectionManager.statusConnection === MongooseConnectionStatus[1]) {
        const model = modelClass;
        const result = await model.findOne(item)
        return result
      } else if (this.DBConnectionManager.statusConnection === MongooseConnectionStatus[0]) {
        throw new Error("Database is disconnected");
      }
    }
  }
}
