import { axiosInitialization } from "../configs/axiosInstance";
import { Team } from "../models/Team";


type GetLeaderBoardResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetLeaderBoardData[];
};

export type GetLeaderBoardData = {
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

export const getLeaderBoard = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetLeaderBoardResponse>(`/social/leaderboard`)
    .then((res) => {
      return res.data;
    });
};
