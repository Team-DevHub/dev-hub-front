import { PostingReq } from '@/types/api/request';
import { authInstance } from './instance';
import { AxiosResponse } from 'axios';

export const postAPI = {
  posting: async (formData: PostingReq) => {
    try {
      const { data }: AxiosResponse = await authInstance.post(
        `/posts`,
        formData,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
};
