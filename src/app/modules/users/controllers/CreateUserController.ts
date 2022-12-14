import { Request, Response } from "express";
import { logger } from "../../../shared/log/logger.js";
import { User } from "../domain/interfaces/Users.js";
import CreateUserUseCase from "../useCases/CreateUser.useCase.js";

export default class CreateUserController {
  constructor() { }

  async execute(req: Request, res: Response, next: Function) {
    const user: User = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    }

    const createUserUseCase = new CreateUserUseCase();
    await createUserUseCase.execute(user)
      .then((user) => {
        // TODO: Agregar email de usuario a la info del log
        logger({ HttpType: "POST", route: "/users/create", useremail: user.email, success: true })
        res.status(201).json(user);
      })
      .catch((err) => {
        logger({ HttpType: "POST", route: "/users/create", useremail: user.email, error: err.errors[0].description, success: false })
        res.status(err.statusCode).json({ error: err.errors })
      })
  }
}