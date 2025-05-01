import { Task } from "react-native";
import { axiosInitialization } from "../configs/axiosInstance";
import { Team } from "../models/Team";

type GetTeamParam = {
    slug: string,
};

type GetTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: Team;
};

export const getTeam = ({ slug }: GetTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetTeamResponse>(`/social/team/${slug}`)
    .then((res) => {
      return res.data;
    });
};
