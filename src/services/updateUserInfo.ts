import axiosInstance from "../configs/axiosInstance";

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
  return axiosInstance
    .put<UpdateUserResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/social/user`,
      { name, gender, birth },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => response.data);
};
