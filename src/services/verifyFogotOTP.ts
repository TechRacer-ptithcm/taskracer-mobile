import axios from "axios";

interface VerifyForgotResponse {
  message: string;
  code: string;
  status: boolean;
  data: VerifyForgotResponseData;
}

interface VerifyForgotResponseData {
  token: string;
}

export interface VerifyForgotParams {
  otp: string;
}

export const verifyForgotOTP = async (data: VerifyForgotParams) => {
  console.log(
    `${process.env.EXPO_PUBLIC_BASE_URL}/auth/verify-otp-forgot-password`
  );
  return axios
    .post<VerifyForgotResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/auth/verify-otp-forgot-password`,
      data,
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      return res.data;
    });
};
