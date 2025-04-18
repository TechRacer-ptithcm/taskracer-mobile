import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import store from "../redux/store";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { refresh } from "../services/refresh";
import { setToken } from "../redux/slices/authSlice";
import { Alert } from "react-native";

export const axiosInitialization: () => AxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  });

  axiosInstance.interceptors.request.use(async function (request) {
    const accessToken = store.getState().auth.token;
    if (accessToken) {
      const user = jwtDecode(accessToken);
      const isRefresh = dayjs.unix(user.exp ? user.exp : 0).diff(dayjs()) < 1;

      if (!isRefresh) return request;
      const newAccessToken = await refresh()
        .then((res) => {
          return res.data.data.access_token;
        })
        .catch((error) => {
          console.log("Refresh error with message:", error);
          Alert.alert("Session is expired! Please login again");
        });
      store.dispatch(setToken(newAccessToken));
      request.headers.Authorization = `Bearer ${newAccessToken}`;
      return request;
    } else {
      const newAccessToken = await refresh()
        .then((res) => {
          return res.data.data.access_token;
        })
        .catch((error) => {
          console.log("Refresh error with message:", error);
          Alert.alert("Session is expired! Please login again");
        });
      store.dispatch(setToken(newAccessToken));
      request.headers.Authorization = `Bearer ${newAccessToken}`;
      return request;
    }
  });
  return axiosInstance;
};
