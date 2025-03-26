import axios from "axios";

type CreateTaskParam = {
  accessToken: string;
  type: string;
  content: string;
  priority: string;
  status: string;
};

type CreateTaskResponse = {
  message: string;
  code: string;
  status: boolean;
  data: CreateTaskData;
};

type CreateTaskData = {
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

export const createTask = ({
  accessToken,
  type,
  content,
  priority,
  status,
}: CreateTaskParam) => {
  return axios
    .post<CreateTaskResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/task`,
      {
        type,
        content,
        priority,
        status,
      },
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
