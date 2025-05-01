
import { axiosInitialization } from "../configs/axiosInstance";

type DeleteTeamParam = {
  slug: string;
};

type DeleteTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: any;
};

export const deleteTeam = ({ slug }: DeleteTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .delete<DeleteTeamResponse>(`/social/team/${slug}`)
    .then((res) => {
      return res.data;
    });
};
