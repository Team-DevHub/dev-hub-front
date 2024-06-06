import { PostingReq, PostsReq } from '@/types/api/request';
import { baseInstance, authInstance } from './instance';
import { AxiosResponse } from 'axios';

export const postAPI = {
  posting: async (postData: PostingReq) => {
    try {
      const { data }: AxiosResponse = await authInstance.post(
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
      const { data }: AxiosResponse = await baseInstance.get(`/posts`, {
        params: params,
      });
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
};
