import axios from "axios";

type UpdateTaskParam = {
  id: string;
  accessToken: string;
  type: string;
  content: string;
  priority: string;
  description: string;
  status: string;
  startAt: string;
  dueAt: string;
};

type UpdateTaskResponse = {
  message: string;
  code: string;
  status: boolean;
  data: UpdateTaskData;
};

type UpdateTaskData = {
  id: string;
  parent: string;
  type: string;
  resourceId: string;
  owner: string;
  content: string;
  priority: string;
  description: string;
  startAt: string;
  dueAt: string;
  status: string;
  users: any;
};

export const updateTask = ({
  id,
  accessToken,
  type,
  content,
  priority,
  description,
  status,
  startAt,
  dueAt,
}: UpdateTaskParam) => {
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
    .put<UpdateTaskResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/task?taskId=${id}`,
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
