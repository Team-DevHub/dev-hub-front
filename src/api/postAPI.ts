import { PostingReq, PostsReq } from '@/types/api/request';
import { baseInstance, authInstance } from './instance';
import { AxiosError, AxiosResponse } from 'axios';
import { CommonRes, PostRes, PostsRes } from '@/types/api/response';

export const postAPI = {
  posting: async (postData: PostingReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.post(
        `/posts`,
        postData,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
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
      window.alert('오류가 발생했습니다.');
    }
  },
  post: async (postId: number) => {
    try {
      const { data }: AxiosResponse = await baseInstance.get<PostRes>(
        `/posts/${postId}`,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
  deletePost: async (postId: number) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.delete(
        `/posts/${postId}`,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
};
