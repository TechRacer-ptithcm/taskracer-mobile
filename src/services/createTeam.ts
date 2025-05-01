import { axiosInitialization } from "../configs/axiosInstance";

type CreateTeamParam = {
    slug: string,
    name: string,
    visibility: 'PUBLIC' | 'PRIVATE',
};

type CreateTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: CreateTeamData;
};

type CreateTeamData = {
    slug: string,
    name: string,
    owner: string,
    visibility: 'PUBLIC'|'PRIVATE',
    users: any[] | null
};

export const createTeam = ({
    slug,
    name,
    visibility
}: CreateTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<CreateTeamResponse>(`/social/team`, {
        slug,
        name,
        visibility
    })
    .then((res) => {
      return res.data;
    });
};
