import express from "express";
import SignInController from "./controller/SignInController.js";
import SignOutController from "./controller/SignOutController.js";

export const AuthRoutes = () => {
  const router = express.Router()
  // Controllers
  const signInController = new SignInController()
  const signOutController = new SignOutController()
  // Create New User
  router.post('/signin', signInController.execute)
  router.get('/signout', signOutController.execute)

  return router;
}