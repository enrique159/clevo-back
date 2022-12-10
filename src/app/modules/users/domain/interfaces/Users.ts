export interface Users {
  users: User[];
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}
