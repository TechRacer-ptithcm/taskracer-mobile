import { axiosInitialization } from "../configs/axiosInstance";

type RemoveUserOutOfTaskParam = {
    taskId: string,
    userId: string,
};

type RemoveUserOutOfTaskResponse = {
  message: string;
  code: string;
  status: boolean;
  data: RemoveUserOutOfTaskData;
};

type RemoveUserOutOfTaskData = {
    message: string,
};

export const removeUserOutOfTask = ({
    taskId,
    userId
}: RemoveUserOutOfTaskParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<RemoveUserOutOfTaskResponse>(`/content/task/assign-user`, {taskId, userId})
    .then((res) => {
      return res.data;
    });
};
