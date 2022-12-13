import { Request, Response } from "express";
import { logger } from "../../shared/log/logger.js";

export default class SignOutController {
  constructor() { }

  async execute(req: Request, res: Response, next: Function) {
    try {
      res.clearCookie("JSESSIONID");
      res.status(200).json({ message: "Signed out successfully" });
    } catch (error) {
      logger({ HttpType: "POST", route: "/auth/signout", useremail: 'NA', error: error.message, success: false })
      res.status(500).json({ error: "Internal server error" });
    }
  }
}