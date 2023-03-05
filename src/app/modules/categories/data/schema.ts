import mongoose from "mongoose";
import { Category } from "../domain/interfaces/index.js";

export const CategorySchema = new mongoose.Schema<Category>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: true,
    default: "ti-package",
  },
  color: {
    type: String,
    required: true,
    default: "#000000",
  },
},{ versionKey: false, timestamps: true });