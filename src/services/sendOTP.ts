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

export const sentOTP = async (data: OTPParams) => {
  console.log(
    `${process.env.EXPO_PUBLIC_BASE_URL}/auth/send-otp-forgot-password`
  );
  return axios
    .post<OTPResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/auth/send-otp-forgot-password`,
      data,
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      console.log("Send OTP successfully", res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("Send OTP error with message:", error);
    });
};
