import express from "express";
import CreateUserController from "./controllers/CreateUserController.js";

export const UserRoutes = () => {
  const router = express.Router()
  // Controllers
  const createUserController = new CreateUserController()
  // Create New User
  router.post('/create', createUserController.execute)

  return router;
}