import { Task } from "react-native";
import axiosInstance from "../configs/axiosInstance";

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
  return axiosInstance
    .get<GetTaskByIdResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/task?taskId=${id ? id : ""}`,
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
