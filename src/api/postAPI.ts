import { PostingReq, PostsReq } from '@/types/api/request';
import { baseInstance, authInstance } from './instance';
import { AxiosError, AxiosResponse } from 'axios';
import { PostsRes } from '@/types/api/response';

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
      const myPage = params.myPage === true; // 쿼리 매개변수를 boolean으로 파싱
      const instance = myPage ? authInstance : baseInstance;

      const { data }: AxiosResponse = await instance.get<PostsRes>(`/posts`, {
        params: params,
      });
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response && err.response.status === 404) {
          // 404 오류에 대한 기본 반환 값 설정
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
};
