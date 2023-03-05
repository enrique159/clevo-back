import express from "express";
import VerifyAuthMiddleware from "../../middlewares/verifyAuth/verifyAuthMiddleware.js";
import CreateCategorieController from "./controllers/CreateCategorieController.js";
import GetCategoriesController from "./controllers/GetCategoriesController.js";

export const CategoriesRoutes = () => {
  const router = express.Router()
  // Controllers
  const createCategorieController = new CreateCategorieController()
  const getCategoriesController = new GetCategoriesController()
  // Middleware
  const verifyAuthMiddleware = new VerifyAuthMiddleware()
  // Create New Categorie
  router.post('/create', verifyAuthMiddleware.execute, createCategorieController.execute)
  // Get All Categories
  router.get('/', verifyAuthMiddleware.execute, getCategoriesController.execute)

  return router;
}