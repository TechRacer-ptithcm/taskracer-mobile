import { axiosInitialization } from "../configs/axiosInstance";
import { Team } from "../models/Team";


type GetCurrentDataResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetCurrentDataData;
};

export type GetCurrentDataData = {
    user: UserRank,
    score: number,
    rankData: RankData,
};

type UserRank = {
    streak: number,
    username: string,
    name: string
}
type RankData = {
    rank: string,
    tier: number,
    star: number
}

export const getCurrentData = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetCurrentDataResponse>(`/social/ranking/current-data`)
    .then((res) => {
      return res.data;
    });
};
