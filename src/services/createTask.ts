import { axiosInitialization } from "../configs/axiosInstance";

type CreateTaskParam = {
  accessToken: string;
  type: string;
  content: string;
  priority: string;
  description: string;
  status: string;
  startAt: string | undefined;
  dueAt: string;
  taskType: string;
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
  taskType
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
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<CreateTaskResponse>(`/content/task`, {
      type,
      content,
      priority,
      description,
      status,
      startAt,
      dueAt,
      taskType
    })
    .then((res) => {
      return res.data;
    });
};
