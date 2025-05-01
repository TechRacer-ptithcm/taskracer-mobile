import { axiosInitialization } from "../configs/axiosInstance";

type AcceptUserToTeamParam = {
    slug: string,
    userId: string,
};

type AcceptUserToTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: AcceptUserToTeamData;
};

type AcceptUserToTeamData = {
    message: string,
};

export const acceptUserToTeam = ({
    slug,
    userId
}: AcceptUserToTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<AcceptUserToTeamResponse>(`/social/team/${slug}/accept/${userId}`)
    .then((res) => {
      return res.data;
    });
};
