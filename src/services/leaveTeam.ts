import { axiosInitialization } from "../configs/axiosInstance";

type LeaveTeamParam = {
    slug: string,
};

type LeaveTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: LeaveTeamData;
};

type LeaveTeamData = {
    message: string,
};

export const leaveTeam = ({
    slug,
}: LeaveTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<LeaveTeamResponse>(`/social/team/${slug}/leave`)
    .then((res) => {
      return res.data;
    });
};
