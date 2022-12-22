import { Request, Response } from "express";
import { logger } from "../../shared/log/logger.js";
import { Auth } from "../domain/interfaces/Auth.js";
import SignInUseCase from "../useCases/SignIn.useCase.js";

export default class SignInController {
  constructor() { }

  async execute(req: Request, res: Response, next: Function) {
    const auth: Auth = {
      email: req.body.email,
      password: req.body.password,
    }

    const signInUseCase = new SignInUseCase();
    await signInUseCase.execute(auth)
      .then((response) => {
        logger({ HttpType: "POST", route: "/auth/signin", useremail: response.user.email, success: true })
        //res.cookie("JSESSIONID", response.token, { httpOnly: true })
        res.status(200).json({ data: response });
      })
      .catch((err) => {
        logger({ HttpType: "POST", route: "/auth/signin", useremail: auth.email, error: err.errors[0].description, success: false })
        res.status(err.statusCode).json({ error: err.errors })
      })
  }
}