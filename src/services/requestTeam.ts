import { axiosInitialization } from "../configs/axiosInstance";

type RequestTeamParam = {
    slug: string,
};

type RequestTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: RequestTeamData;
};

type RequestTeamData = {
    message: string,
};

export const requestTeam = ({
    slug,
}: RequestTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<RequestTeamResponse>(`/social/team/${slug}/request`)
    .then((res) => {
      return res.data;
    });
};
