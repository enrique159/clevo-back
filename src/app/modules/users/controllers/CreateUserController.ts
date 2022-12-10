import { Request, Response } from "express";
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
        res.status(201).json(user);
      })
      .catch((err) => {
        next(err);
      })
  }
}