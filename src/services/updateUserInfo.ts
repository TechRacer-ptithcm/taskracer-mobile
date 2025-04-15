import { axiosInitialization } from "../configs/axiosInstance";

type UpdateUserParams = {
  name: string;
  gender: string;
  birth: Date;
  accessToken: string;
};

type UpdateUserResponse = {
  message: string;
  code: string;
  status: boolean;
  data: UpdateUserData;
};

type UpdateUserData = {
  id: string;
  tier: string;
  streak: number;
  username: string;
  email: string;
  active: boolean;
  name: string;
  gender: string;
  birth: string;
};

export const updateUser = ({
  name,
  gender,
  birth,
  accessToken,
}: UpdateUserParams): Promise<UpdateUserResponse> => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .put<UpdateUserResponse>(`/social/user`, { name, gender, birth })
    .then((response) => response.data);
};
