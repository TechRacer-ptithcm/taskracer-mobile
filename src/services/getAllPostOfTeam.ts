import { axiosInitialization } from "../configs/axiosInstance";

type GetAllPostsOfTeamParam = {
  teamId: string;
};

type GetAllPostsOfTeamResponse = {
  message: string;
  code: string;
  status: boolean;
  data: GetAllPostsOfTeamData;
};

export type GetAllPostsOfTeamData = {
    content: GetAllPostOfTeamContent[],
    current_page: number,
    total_page: number,
    total_elements: number
};
export type GetAllPostOfTeamContent = {
    id: string,
    userId: string,
    teamId:string,
    content: string,
    fileAttachmentUrl: FileAttachmentUrlData,
    likeCount: number,
}
type FileAttachmentUrlData = {
    name:string,
    contentType: string,
    size: number,
    md5Checksum: string,
}
export const getAllPostsOfTeam = ({ teamId }: GetAllPostsOfTeamParam) => {
  const axiosInstance = axiosInitialization();
  return axiosInstance
    .get<GetAllPostsOfTeamResponse>(`/content/team/${teamId}`)
    .then((res) => {
      return res.data;
    });
};
