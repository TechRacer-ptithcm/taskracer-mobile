import axios from "axios";

interface LoginResponse {
  message: string;
  code: string;
  status: boolean;
  data: LoginResponseData;
}

interface LoginResponseData {
  id: string;
  username: string;
  email: string;
  active: boolean;
  tier: string;
  access_token: string;
}

export interface LoginParams {
  account: string;
  password: string;
}

export const login = async (data: LoginParams) => {
  console.log(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/sign-in`);
  return axios.post<LoginResponse>(
    `${process.env.EXPO_PUBLIC_BASE_URL}/auth/sign-in`,
    data,
    { headers: { "Content-Type": "application/json" } }
  );
};
