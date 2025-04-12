import axios, { AxiosRequestHeaders } from "axios";
import store from "../redux/store";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { refresh } from "../services/refresh";
import { useAppDispatch } from "../redux/hooks";
import { setToken } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { tokenSelector } from "../redux/selectors/authSelectors";
import { useNavigation } from "@react-navigation/native";
import { AuthStackString } from "../constants/screen";
import { Alert } from "react-native";

export const useAxios = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const accessToken = useSelector(tokenSelector);
  const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  axiosInstance.interceptors.request.use(function (request) {
    const user = jwtDecode(accessToken);
    const isRefresh = dayjs.unix(user.exp ? user.exp : 0).diff(dayjs()) < 1;

    if (!isRefresh) return request;

    const newAccessToken = refresh()
      .then((res) => {
        return res.data.data.access_token;
      })
      .catch((error) => {
        console.log("Refresh error with message:", error);
        Alert.alert("Session is expired! Please login again");
        navigation.navigate(AuthStackString);
      });
    dispatch(setToken(newAccessToken));
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
  });
  return axiosInstance;
};
