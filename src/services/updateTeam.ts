import { axiosInitialization } from "../configs/axiosInstance";

type UpdateTeamParam = {
    slug: string,
    name:string,
    visibility: 'PUBLIC' | 'PRIVATE',
};

type UpdateTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: UpdateTeamData;
};

type UpdateTeamData = {
    slug: string,
    name: string,
    owner: string,
    visibility: string,
    users: string[]
};

export const updateTeam = ({
    slug,
    name,
    visibility
}: UpdateTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .put<UpdateTeamResponse>(`/social/team/${slug}`, {
        name,
        visibility
    })
    .then((res) => {
      return res.data;
    });
};
