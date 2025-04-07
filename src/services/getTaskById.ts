import axios from "axios";
import { Task } from "react-native";

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
  return axios
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
