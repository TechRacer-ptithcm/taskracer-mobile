import { axiosInitialization } from "../configs/axiosInstance";
import { Team } from "../models/Team";


type GetAllTeamssResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetAllTeamssData[];
};

export type GetAllTeamssData = {
    content: Team[],
    current_page: number,
    total_page: number,
    totalElement: number,
};

export const getAllTeamss = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetAllTeamssResponse>(`/social/teams`)
    .then((res) => {
      return res.data;
    });
};
