import axiosInstance from "../configs/axiosInstance";

type DeleteTaskParam = {
  accessToken: string;
  taskId: string;
};

type DeleteTaskResponse = {
  message: string;
  code: string;
  status: boolean;
  data: any;
};

export const deleteTask = ({ accessToken, taskId }: DeleteTaskParam) => {
  return axiosInstance
    .delete<DeleteTaskResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/task?taskId=${taskId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
};
