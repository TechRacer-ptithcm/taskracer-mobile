import axios from "axios";

type CreateTaskParam = {
  accessToken: string;
  type: string;
  content: string;
  priority: string;
  description: string;
  status: string;
  startAt: string | undefined;
  dueAt: string;
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
  start_at: string;
  due_at: string;
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
  description,
  status,
  startAt,
  dueAt,
}: CreateTaskParam) => {
  console.log({
    type,
    content,
    priority,
    description,
    status,
    startAt,
    dueAt,
  });
  return axios
    .post<CreateTaskResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/task`,
      {
        type,
        content,
        priority,
        description,
        status,
        startAt,
        dueAt,
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
