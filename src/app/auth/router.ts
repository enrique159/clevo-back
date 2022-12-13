import express from "express";
import SignInController from "./controller/SignInController.js";

export const AuthRoutes = () => {
  const router = express.Router()
  // Controllers
  const signInController = new SignInController()
  // Create New User
  router.post('/signin', signInController.execute)

  return router;
}