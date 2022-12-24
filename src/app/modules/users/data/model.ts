import mongoose from "mongoose";
import { User } from "../domain/interfaces/Users.js";
import { UserSchema } from "./schema.js";

export const UserModel = () => {
  return mongoose.model<User>("users", UserSchema);
}