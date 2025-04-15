import { axiosInitialization } from "../configs/axiosInstance";

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
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .put<UpdateTaskResponse>(`/content/task?taskId=${id}`, {
      type,
      content,
      priority,
      description,
      status,
      startAt,
      dueAt,
    })
    .then((res) => {
      return res.data;
    });
};
