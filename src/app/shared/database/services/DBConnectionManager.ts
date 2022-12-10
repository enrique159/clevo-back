import { IDBConnectionManager } from "../interfaces/IDBConnectionManager.js";
import MongooseManager from "../integrations/MongooseManager.js";

// Types
import { DatabaseTypes } from "../interfaces/DatabaseTypes.js";

export default class DBConnectionManager implements IDBConnectionManager {
  private static instance: DBConnectionManager;

  private constructor() {}

  public static getInstance(): DBConnectionManager {
    if (!DBConnectionManager.instance) {
      DBConnectionManager.instance = new DBConnectionManager();
    }

    return DBConnectionManager.instance;
  }

  public async connect(): Promise<void> {
    // MONGO DB
    if (process.env.DATABASE_TYPE === DatabaseTypes.MONGO) {
      console.log("Database Type: " + DatabaseTypes.MONGO)
      console.log("Connection to Database: CONNECTING")
      // Get the instance of the class
      const mongooseManager = MongooseManager.getInstance(process.env.MONGODB_URI)
      await mongooseManager.connect().then(() => {
        console.log("Connection to Database: SUCCESS")
      })
      .catch((error) => {
        console.log("Connection to Database: ERROR")
        console.log(error)
      })
    }

  }

  public async disconnect(): Promise<void> {
    // MONGO DB
    if (process.env.DATABASE_TYPE === DatabaseTypes.MONGO) {
      console.log("Database Type: " + DatabaseTypes.MONGO)
      console.log("Connection to Database: DISCONNECTING")
      // Get the instance of the class
      const mongooseManager = MongooseManager.getInstance()
      await mongooseManager.disconnect().then(() => {
        console.log("Connection to Database: DISCONNECTED")
      })
      .catch((error) => {
        console.log("Connection to Database: ERROR")
        console.log(error)
      })
    }
  }

  public get statusConnection(): String {
    // MONGO DB
    if (process.env.DATABASE_TYPE === DatabaseTypes.MONGO) {
      // Get the instance of the class
      const mongooseManager = MongooseManager.getInstance()
      return mongooseManager.statusConnection
    }
  }
}