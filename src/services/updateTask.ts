// import axios from "axios";

// type UpdateTaskParam = {
//   id: string;
// };

// type UpdateTaskResponse = {
//   message: string;
//   code: string;
//   status: boolean;
//   data: UpdateTaskData;
// };

// type UpdateTaskData = {
//   id: string;
//   parent_id: string;
//   resource_type: string;
//   resource_id: string;
//   owner: string;
//   content: string;
//   priority: string;
//   description: string;
//   start_at: Date;
//   due_at: Date;
//   status: string;
//   created_at: Date;
//   updated_at: Date;
//   deleted_at: Date;
// };

// export const getTaskById = ({ id }: UpdateTaskParam) => {
//   return axios
//     .get<UpdateTaskResponse>(
//       `${process.env.EXPO_PUBLIC_BASE_URL}/content/task/${id}`
//     )
//     .then((res) => {
//       return res.data;
//     });
// };
