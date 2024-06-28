import { AxiosError, AxiosResponse } from 'axios';
import { baseInstance } from '../instance';
import { API_ERROR_MSG } from '@/constants/message';
// import { CommonRes } from '@/models/common.model';
import { GetGithubUrlRes } from '@/models/auth.model';

export const authAPI = {
  getGithubLoginUrl: async () => {
    try {
      const { data }: AxiosResponse<GetGithubUrlRes> = await baseInstance.get(
        `/oauth/github`,
      );
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        window.alert(API_ERROR_MSG);
      }
    }
  },
};
