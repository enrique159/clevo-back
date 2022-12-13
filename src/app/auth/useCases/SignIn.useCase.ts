import { comparePassword } from "../../../utils/comparePasswords.js";
import { BaseUseCase } from "../../shared/common/BaseUseCase.js";
import DBConnectionManager from "../../shared/database/services/DBConnectionManager.js";
import Exception from "../../shared/error/Exception.js";
import { logger } from "../../shared/log/logger.js";
import { Auth, AuthResponse, QueryParams, UserAuth } from "../domain/interfaces/Auth.js";
import { SignInRepository } from "../repository/SignInRepository.js";
import { generateToken } from "../../../plugins/jwt/generateToken.js";
import ErrorCode from "../../shared/error/errorCode.js";
import HttpStatusCode from "../../shared/enums/httpStatusCode.js";

export default class SignInUseCase implements BaseUseCase<Auth, Promise<AuthResponse>> {
  constructor() {}

  async execute(payload: Auth): Promise<AuthResponse> {
    // Dependency Injection
    const dbConnectionManager = DBConnectionManager.getInstance();
    const signInRepository = new SignInRepository(dbConnectionManager);
    // Query
    const query: QueryParams = { email: payload.email }
    // Execute
    const user = await signInRepository.execute(query);
    if (user) {
      try {
        const validPassword = comparePassword(payload.password, user.password)
        if (!validPassword) {
          logger({ HttpType: "POST", route: "/auth/signin", useremail: payload.email, error: "Invalid credentials", success: false })
          throw new Exception(HttpStatusCode.UNAUTHORIZED, ErrorCode.ERR0017)
        }
      } catch (err) {
        logger({ HttpType: "POST", route: "/auth/signin", useremail: payload.email, error: err.message, success: false })
        throw new Exception(HttpStatusCode.UNAUTHORIZED, ErrorCode.ERR0017)
      }
    } else {
      logger({ HttpType: "POST", route: "/auth/signin", useremail: payload.email, error: "User not found", success: false })
      throw new Exception(HttpStatusCode.NOT_FOUND, ErrorCode.ERR0001)
    }

    const userAuth: UserAuth = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }

    const token = generateToken(userAuth);
    const authResponse: AuthResponse = {
      token: token,
      user: userAuth
    }
    // Return
    return authResponse;
  }
}