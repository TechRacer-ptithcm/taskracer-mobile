import axios from "axios";

type GetAllTasksParam = {
  accessToken: string;
};

type GetAllTasksResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetAllTasksData[];
};

type GetAllTasksData = {
  id: string;
  parent_id: string;
  resource_type: string;
  resource_id: string;
  owner: string;
  content: string;
  priority: string;
  description: string;
  start_at: Date;
  due_at: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export const getAllTasks = ({ accessToken }: GetAllTasksParam) => {
  return axios
    .get<GetAllTasksResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/tasks`,
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
