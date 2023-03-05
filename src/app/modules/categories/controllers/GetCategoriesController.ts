import { Request, Response } from "express";
import { logger } from "../../../shared/log/logger.js";
import { Category } from "../domain/interfaces/Categories.js";
import { decodeToken } from "../../../../plugins/jwt/decodeToken.js";
import GetCategoriesUseCase from "../useCases/GetCategories.useCase.js";


export default class GetCategoriesController {
  constructor() { }

  async execute(req: Request, res: Response, next: Function) {
    let token = req.headers['authorization'];
    const decodedToken = decodeToken(token);

    const getCategoriesUseCase = new GetCategoriesUseCase();
    await getCategoriesUseCase.execute()
      .then((categories) => {
        logger({ HttpType: "GET", route: "/categories/", useremail: decodedToken.email, success: true })
        res.status(201).json(categories);
      })
      .catch((err) => {
        logger({ HttpType: "GET", route: "/categories/", useremail:  decodedToken.email, error: err.errors[0].description, success: false })
        res.status(err.statusCode).json({ error: err.errors })
      })
  }
}