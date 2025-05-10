import { axiosInitialization } from "../configs/axiosInstance";



type GetPomoResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetPomoData;
};

type GetPomoData = {
  startTime: number,
  checkpointTime: number,
  endTime: number,
  point: number
}

export const getPomoService = () => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetPomoResponse>(`/pomodoro`)
    .then((res) => {
      return res.data;
    });
};
