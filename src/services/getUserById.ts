import { Alert } from "react-native";
import { axiosInitialization } from "../configs/axiosInstance";

type GetUserByIdProps = {
  userId: string;
};

type GetUserByIdResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetUserByIdData;
};
export type GetUserByIdData = {
  id: string;
  tier: string;
  streak: number;
  username: string;
  email: string;
  active: boolean;
  name: string;
  gender: string;
  birth: string | null;
};

export const getUserById = async ({userId}:GetUserByIdProps) => {
  console.log(`/social/user?id=${userId}`)
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetUserByIdResponse>(`/social/user?id=${userId}`)
      .then((res) => {
        return res.data;
      });
};
