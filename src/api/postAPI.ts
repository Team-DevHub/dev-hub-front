import { CommentReq, PostingReq, PostsReq } from '@/types/api/request';
import { baseInstance, authInstance } from './instance';
import { AxiosError, AxiosResponse } from 'axios';
import { CommonRes, PostRes, PostsRes } from '@/types/api/response';
import { API_ERROR_MSG } from '@/constants/message';

export const postAPI = {
  posting: async (postData: PostingReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.post(
        `/posts`,
        postData,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
  posts: async (params: PostsReq) => {
    try {
      const myPage = params.myPage === true;
      const instance = myPage ? authInstance : baseInstance;

      const { data }: AxiosResponse = await instance.get<PostsRes>(`/posts`, {
        params: params,
      });
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 404) {
          return {
            result: [],
            pagination: {
              currentPage: params.page || 1,
              totalPosts: 0,
            },
          };
        }
      }
      window.alert(API_ERROR_MSG);
    }
  },
  post: async (postId: number) => {
    try {
      const { data }: AxiosResponse = await baseInstance.get<PostRes>(
        `/posts/${postId}`,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
  deletePost: async (postId: number) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.delete(
        `/posts/${postId}`,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
  comments: async (commentsData: CommentReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.post(
        `/comments`,
        commentsData,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
  deleteComment: async (commentId: number) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.delete(
        `/comments`,
        {
          data: { commentId },
        },
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
};
