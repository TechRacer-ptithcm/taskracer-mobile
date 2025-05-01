

import { axiosInitialization } from "../configs/axiosInstance";

type RemoveUserFromTeamParam = {
    slug: string,
    userId: string,
};

type RemoveUserFromTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: RemoveUserFromTeamData;
};

type RemoveUserFromTeamData = {
    message: string,
};

export const removeUserFromTeam = ({
    slug,
    userId
}: RemoveUserFromTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<RemoveUserFromTeamResponse>(`/social/team/${slug}/remove/${userId}`)
    .then((res) => {
      return res.data;
    });
};
