import { axiosInitialization } from "../configs/axiosInstance";
import { GetAllTasksData } from "./getAllTasks";

type CreateTaskParam = {
  accessToken: string;
  parent?: string|null;
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
  data: GetAllTasksData;
};


export const createTask = ({
  accessToken,
  type,
  parent = null, 
  content,
  priority,
  description,
  status,
  startAt,
  dueAt,
  taskType
}: CreateTaskParam) => {
  console.log({
    parent,
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
      parent,
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
