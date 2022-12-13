import jwt from 'jsonwebtoken'
import { UserAuth } from '../domain/interfaces/Auth.js'

export const generateToken = (user: UserAuth) => {
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  }
  const secret = process.env.SECRET_KEY || 'secret'
  const options = {
    expiresIn: process.env.EXPIRATION_TIME || '24h',
  }
  return jwt.sign(payload, secret, options)
}