import axios from "axios";

interface RegisterResponse {
  message: string;
  code: string;
  status: boolean;
  data: RegisterResponseData;
}

interface RegisterResponseData {
  username: string;
  email: string;
  active: boolean;
}

interface RegisterParams {
  username: string;
  password: string;
  email: string;
}

export const register = async (data: RegisterParams) => {
  return axios
    .post<RegisterResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/auth/sign-up`,
      data
    )
    .then((res) => {
      console.log("Create new user successfully");
      return res.data;
    })
    .catch((error) => {
      console.log("Create new user error with message:", error);
    });
};
