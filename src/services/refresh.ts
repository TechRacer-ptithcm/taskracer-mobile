import axios from "axios";

interface RefreshResponse {
  message: string;
  code: string;
  status: boolean;
  data: RefreshResponseData;
}

interface RefreshResponseData {
  access_token: string;
}

export const refresh = async () => {
  return axios.post<RefreshResponse>(
    `${process.env.EXPO_PUBLIC_BASE_URL}/auth/refresh`
  );
};
