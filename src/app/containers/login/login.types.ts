export interface UserData {
  username: string;
  password: string;
}

export interface loginData {
  token: string;
  user: User;
}

interface User {
  id: number;
  role: string;
  username: string;
}
