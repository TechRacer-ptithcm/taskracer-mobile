import axios from "axios";

type GetTaskByIdParam = {
  id: string;
};

type GetTaskByIdResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetTaskByIdData;
};

type GetTaskByIdData = {
  id: string;
  parent_id: string;
  resource_type: string;
  resource_id: string;
  owner: string;
  content: string;
  priority: string;
  description: string;
  start_at: Date;
  due_at: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export const getTaskById = ({ id }: GetTaskByIdParam) => {
  return axios
    .get<GetTaskByIdResponse>(
      `${process.env.EXPO_PUBLIC_BASE_URL}/content/task/${id}`
    )
    .then((res) => {
      return res.data;
    });
};
