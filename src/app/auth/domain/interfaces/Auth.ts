export interface Auth {
  email: string;
  password: string;
}

export interface QueryParams {
  [key: string]: string;
}

export interface AuthResponse {
  token: string;
  user: UserAuth;
}

export interface UserAuth {
  _id: string;
  email: string;
  name: string;
  role: string;
}