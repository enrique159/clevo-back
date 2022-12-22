import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// DEPENDENCIES
import DBConnectionManager from './app/shared/database/services/DBConnectionManager.js';
// ROUTES IMPORT 
import { Routes } from './routes/index.js';

// TYPES 
import { MongooseConnectionStatus } from './types/Mongoose.type.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3333;

// MIDDLEWARE
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/', Routes());

// DATABASE CONNECTION
const dbConnectionManager = DBConnectionManager.getInstance();
dbConnectionManager.connect();

// LISTENER DATABASE CONNECTION
setInterval(() => {
  if (dbConnectionManager.statusConnection === MongooseConnectionStatus[0]) {
    dbConnectionManager.connect();
  } else {
    if (dbConnectionManager.statusConnection !== MongooseConnectionStatus[1]) {
      console.log('Database status...' + dbConnectionManager.statusConnection);
    }
  }
}, 10000);

app.listen(port, () => {
  console.log(`[server⚡️]: Server is running on port: ${port}`);
});