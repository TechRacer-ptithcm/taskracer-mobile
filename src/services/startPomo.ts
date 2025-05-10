import { axiosInitialization } from "../configs/axiosInstance";

type StartPomoParams = {
  endTime: number,
}

type StartPomoResponse = {
  message: string;
  code: string;
  status: boolean;
  data: any;
};

export const startPomoService = ({endTime}: StartPomoParams) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .post<StartPomoResponse>(`/pomodoro/start`, {endTime})
    .then((res) => {
      return res.data;
    });
};
