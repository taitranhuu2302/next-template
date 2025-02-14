export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};
