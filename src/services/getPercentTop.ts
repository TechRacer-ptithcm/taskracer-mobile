import { axiosInitialization } from "../configs/axiosInstance";
import { Team } from "../models/Team";


type GetPercentTopResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetPercentTopData;
};

export type GetPercentTopData = {
    user: UserRank,
    top: number
};

type UserRank = {
    streak: number,
    username: string,
    name: string
}

export const getPercentTop = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetPercentTopResponse>(`/social/ranking/percent-top`)
    .then((res) => {
      return res.data;
    });
};
