import axios from "axios";

interface OTPResponse {
  message: string;
  code: string;
  status: boolean;
  data: OTPResponseData;
}

interface OTPResponseData {
  message: string;
}

export interface OTPParams {
  account: string;
}

export const resentOTP = async (data: OTPParams) => {
  console.log(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/resend-email`);
  return axios
    .post<OTPResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/auth/resend-email`,
      data,
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      console.log("Resend OTP successfully", res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("Resend OTP error with message:", error);
    });
};
