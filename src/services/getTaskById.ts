import { Task } from "react-native";
import { axiosInitialization } from "../configs/axiosInstance";

type GetTaskByIdParam = {
  id: string | undefined;
  accessToken: string;
};

type GetTaskByIdResponse = {
  message: string;
  code: string;
  status: boolean;
  data: Task;
};

export const getTaskById = ({ id, accessToken }: GetTaskByIdParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetTaskByIdResponse>(`/content/task?taskId=${id ? id : ""}`)
    .then((res) => {
      return res.data;
    });
};
