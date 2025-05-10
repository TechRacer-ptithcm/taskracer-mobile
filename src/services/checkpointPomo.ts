import { axiosInitialization } from "../configs/axiosInstance";



type CheckpointPomoResponse = {
  message: string;
  code: string;
  status: boolean;
  data: any;
};

export const checkpointPomoService = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<CheckpointPomoResponse>(`/pomodoro/checkpoint`)
    .then((res) => {
      return res.data;
    });
};
