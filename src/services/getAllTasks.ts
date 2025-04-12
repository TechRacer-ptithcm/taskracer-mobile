import axiosInstance from "../configs/axiosInstance";

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
  return axiosInstance
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
