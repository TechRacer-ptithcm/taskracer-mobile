import { axiosInitialization } from "../configs/axiosInstance";

type GetAllTasksParam = {
  accessToken: string;
};

type GetAllTasksResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetAllTasksData[];
};

export type GetAllTasksData = {
  id: string;
  parent: string;
  type: string; //resource_type
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

export const getAllTasks = ({ accessToken }: GetAllTasksParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetAllTasksResponse>(`/content/tasks`)
    .then((res) => {
      return res.data;
    });
};
