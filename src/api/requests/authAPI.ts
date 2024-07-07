import { AxiosError, AxiosResponse } from 'axios';
import { baseInstance } from '../instance';
import { API_ERROR_MSG } from '@/constants/message';
import { GetUrlRes } from '@/models/auth.model';
import { LoginRes } from '@/models/user.model';

export const authAPI = {
  getGithubLoginUrl: async () => {
    try {
      const { data }: AxiosResponse<GetUrlRes> = await baseInstance.get(
        `/oauth/github`,
      );
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        window.alert(API_ERROR_MSG);
      }
    }
  },
  requestGithubLogin: async (code: string) => {
    try {
      const { data }: AxiosResponse<LoginRes> = await baseInstance.post(
        `/oauth/github`,
        { code },
      );
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        window.alert(API_ERROR_MSG);
      }
    }
  },
  getGoogleLoginUrl: async () => {
    try {
      const { data }: AxiosResponse<GetUrlRes> = await baseInstance.get(
        `/oauth/google`,
      );
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        window.alert(API_ERROR_MSG);
      }
    }
  },
};
