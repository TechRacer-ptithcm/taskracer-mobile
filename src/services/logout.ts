import axios from "axios";

interface LogoutResponse {
  message: string;
  code: string;
  status: boolean;
  data: LogoutResponseData;
}

interface LogoutResponseData {
  message: string,
}

export const logout = async () => {
  console.log(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/logout`);
  return axios.post<LogoutResponse>(
    `${process.env.EXPO_PUBLIC_BASE_URL}/auth/logout`,{},
    { headers: { "Content-Type": "application/json" } }
  );
};
