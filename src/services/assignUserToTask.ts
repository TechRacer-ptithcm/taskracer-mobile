import { axiosInitialization } from "../configs/axiosInstance";

type AssignUserToTaskParam = {
    email: string,
    taskId: string,
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
    email,
    taskId
}: AssignUserToTaskParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<AssignUserToTaskResponse>(`/content/task/assign-user`, {
        email, taskId
    })
    .then((res) => { 
      return res.data;
    });
};
