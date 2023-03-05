import { Model } from "mongoose";
import { IDBConnectionManager } from "../../../database/interfaces/IDBConnectionManager.js";
import IFindBaseRepository from "../interfaces/IFindBaseRepository.js";
import { MongooseConnectionStatus } from "../../../database/interfaces/MongooseStatus.js";

export default class FindBaseRepository<U> implements IFindBaseRepository<U> {
  protected DBConnectionManager: IDBConnectionManager

  constructor(DBConnectionManager: IDBConnectionManager) {
    this.DBConnectionManager = DBConnectionManager;
  }

  public async execute(modelClass: Model<U>): Promise<U[]> {
    if (process.env.DATABASE_TYPE === "MONGO") {
      if (this.DBConnectionManager.statusConnection === MongooseConnectionStatus[1]) {
        const model = modelClass;
        const result = await model.find()
        return result
      } else if (this.DBConnectionManager.statusConnection === MongooseConnectionStatus[0]) {
        throw new Error("Database is disconnected");
      }
    }
  }
}