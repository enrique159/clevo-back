import ICreateOneBaseRepository from "../interfaces/ICreateOneBaseRepository.js";
import { MongooseConnectionStatus } from "../../../database/interfaces/MongooseStatus.js";

import { Model } from "mongoose";
import DBConnectionManager from "../../../database/services/DBConnectionManager.js";
import { IDBConnectionManager } from "../../../database/interfaces/IDBConnectionManager.js";

export default class CreateOneBaseRepository<T> implements ICreateOneBaseRepository<T> {
  protected DBConnectionManager: DBConnectionManager

  constructor(DBConnectionManager: IDBConnectionManager) {
    this.DBConnectionManager = DBConnectionManager;
  }

  public async execute(item: Partial<T>, modelClass: Model<T>): Promise<T> {
    if (process.env.DATABASE_TYPE === "MONGO") {
      if (this.DBConnectionManager.statusConnection === MongooseConnectionStatus[1]) {
        const model = modelClass;
        const result = await model.create(item)
        return result
      } else if (this.DBConnectionManager.statusConnection === MongooseConnectionStatus[0]) {
        throw new Error("Database is disconnected");
      }
    }
  }
}