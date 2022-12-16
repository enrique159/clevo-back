import express from "express";
import VerifyAuthMiddleware from "../middlewares/verifyAuth/verifyAuthMiddleware.js";
import SignInController from "./controller/SignInController.js";
import SignOutController from "./controller/SignOutController.js";

export const AuthRoutes = () => {
  const router = express.Router()
  // Controllers
  const signInController = new SignInController()
  const signOutController = new SignOutController()
  // Middleware
  const verifyAuthMiddleware = new VerifyAuthMiddleware()
  // Create New User
  router.post('/signin', signInController.execute)
  router.get('/signout', signOutController.execute)
  router.get('/isauth', verifyAuthMiddleware.execute, (req, res) => {
    res.status(200).json({ isAuth: true })
  })

  return router;
}