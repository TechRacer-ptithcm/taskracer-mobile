import { axiosInitialization } from "../configs/axiosInstance";

type GetUserInfoProps = {
  token: string;
};

type GetUserInfoResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetUserInfoData;
};
type GetUserInfoData = {
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

export const getUserInfo = async ({ token }: GetUserInfoProps) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetUserInfoResponse>(`/social/user-data`)
    .then((res) => {
      return res;
    });
};
