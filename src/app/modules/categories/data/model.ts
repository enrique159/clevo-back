import mongoose from "mongoose";
import { Category } from "../domain/interfaces/index.js";
import { CategorySchema } from "./schema.js";

export const CategoryModel = () => {
  return mongoose.model<Category>("categories", CategorySchema);
}