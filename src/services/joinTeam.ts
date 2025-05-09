

import { axiosInitialization } from "../configs/axiosInstance";

type JoinTeamParam = {
    slug: string,
};

type JoinTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: JoinTeamData;
};

type JoinTeamData = {
    message: string,
};

export const joinTeam = ({
    slug,
}: JoinTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<JoinTeamResponse>(`/social/team/${slug}/join`, {slug})
    .then((res) => {
      return res.data;
    });
};
