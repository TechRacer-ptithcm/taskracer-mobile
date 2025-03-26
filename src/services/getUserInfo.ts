import axios from "axios";

export const getUserInfo = async (token: string) => {
  return axios
    .get(`${process.env.EXPO_PUBLIC_BASE_URL}/social/user-data`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};
