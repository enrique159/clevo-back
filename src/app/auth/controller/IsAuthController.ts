import { Request, Response } from "express";
import { decodeToken } from "../../../plugins/jwt/decodeToken.js";
import IsAuthUseCase from "../useCases/IsAuth.useCase.js";
import { logger } from "../../shared/log/logger.js";

export default class IsAuthController {
  constructor() { }

  async execute(req: Request, res: Response) {
    //const token = req.cookies.JSESSIONID;
    const token = req.headers['authorization'];
    const decodedToken = decodeToken(token);

    const isAuthUseCase = new IsAuthUseCase()

    await isAuthUseCase.execute(decodedToken.email)
      .then((response) => {
        res.status(200).json({ data: response })
      })
      .catch((err) => {
        logger({ HttpType: "POST", route: "/auth/isauth", useremail: decodedToken.email, error: err.errors[0].description, success: false })
        res.status(err.statusCode).json({ error: err.errors })
      })
  }
}