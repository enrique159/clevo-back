import mongoose from "mongoose";
import { encryptPassword } from "../../../../utils/encryptPassword.js";
import { User } from "../domain/interfaces/Users.js";
import bcrypt from 'bcryptjs';

export const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
}, { versionKey: false });

// This is a mongoose middleware that will be executed before the user is saved
UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  user.password = encryptPassword(user.password);
  next();
})

// This is a mongoose middleware that will be executed before the user is updated
UserSchema.pre('updateOne', function(next) {
  const user = this;
  // @ts-ignore
  if (!user._update.$set.password) next()
  // @ts-ignore
  user._update.$set.password = encryptPassword(user._update.$set.password);
  next();
})


// This is a mongoose method that will be available in the user model
UserSchema.methods.comparePassword = function(candidatePassword: string, callback: Function) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  })
}
