import { Request, Response } from "express";
import HttpStatusCode from "../../shared/enums/httpStatusCode.js";
import { logger } from "../../shared/log/logger.js";
import jwt from "jsonwebtoken";
import { decodeToken } from "../../../plugins/jwt/decodeToken.js";
import ErrorCode from "../../shared/error/errorCode.js";

export default class VerifyAuthMiddleware {
  constructor() { }

  async execute(req: Request, res: Response, next: Function) {
    const token = req.cookies.JSESSIONID;
    if (!token) {
      logger({ HttpType: req.method, route: req.originalUrl, useremail: "NA", error: ErrorCode.ERR0018.description, success: false })
      return res.status(HttpStatusCode.UNAUTHORIZED).json({ error: [ErrorCode.ERR0018] })
    }

    const decodedToken = decodeToken(token);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err instanceof jwt.TokenExpiredError) {
          logger({ HttpType: req.method, route: req.originalUrl, useremail: decodedToken.email ?? 'NA', error: ErrorCode.ERR0019.description, success: false })
          return res.status(HttpStatusCode.UNAUTHORIZED).json({ error: [ErrorCode.ERR0019] })
        }
        logger({ HttpType: req.method, route: req.originalUrl, useremail: decodedToken.email ?? 'NA', error: ErrorCode.ERR0018.description, success: false })
        return res.status(HttpStatusCode.UNAUTHORIZED).json({ error: [ErrorCode.ERR0018] })
      }
      next();
    })
  }
}