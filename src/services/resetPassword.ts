import axios from "axios";
import { View } from "react-native";

type ResetPassResponse = {
  message: string;
  code: string;
  status: boolean;
  data: ResetPassResponseData;
};
type ResetPassResponseData = {
  message: string;
};
type ResetPassParams = {
  token: string;
  new_password: string;
};
export const resetPass = async ({ token, new_password }: ResetPassParams) => {
  return axios
    .post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/auth/change-password`,
      { token: token, "new-password": new_password },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      return res.data;
    });
};
