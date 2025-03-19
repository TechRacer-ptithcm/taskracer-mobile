import axios from "axios";

interface VerifyResponse {
  message: string;
  code: string;
  status: boolean;
  data: VerifyResponseData;
}

interface VerifyResponseData {
  message: string;
}

export interface VerifyParams {
  otp: string;
}

export const verifyUser = async (data: VerifyParams) => {
  console.log(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/verify-account`);
  return axios
    .post<VerifyResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/auth/verify-account`,
      data,
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      console.log("Verify successfully", res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("Verify error with message:", error);
    });
};
