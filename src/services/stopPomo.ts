import { axiosInitialization } from "../configs/axiosInstance";



type StopPomoResponse = {
  message: string;
  code: string;
  status: boolean;
  data: any;
};

export const stopPomoService = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<StopPomoResponse>(`/pomodoro/stop`)
    .then((res) => {
      return res.data;
    });
};
