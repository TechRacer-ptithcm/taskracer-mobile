import { axiosInitialization } from "../configs/axiosInstance";

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
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .delete<DeleteTaskResponse>(`/content/task?taskId=${taskId}`)
    .then((res) => {
      return res.data;
    });
};
