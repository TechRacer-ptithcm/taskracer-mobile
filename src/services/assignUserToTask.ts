import { axiosInitialization } from "../configs/axiosInstance";

type AssignUserToTaskParam = {
    taskId: string,
    userId: string,
};

type AssignUserToTaskResponse = {
  message: string;
  code: string;
  status: boolean;
  data: AssignUserToTaskData;
};

type AssignUserToTaskData = {
    message: string,
};

export const assignUserToTask = ({
    taskId,
    userId
}: AssignUserToTaskParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<AssignUserToTaskResponse>(`/content/task/assign-user`, {
        taskId, userId
    })
    .then((res) => { 
      return res.data;
    });
};
