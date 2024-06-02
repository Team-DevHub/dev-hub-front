import { JoinReq, LoginReq } from '@/types/api/request';
import { authInstance, baseInstance } from './instance';
import { AxiosResponse } from 'axios';
import {
  CommonRes,
  EmailCheckRes,
  LoginRes,
  TopFiveRes,
  UserInfoRes,
} from '@/types/api/response';

export const userAPI = {
  login: async (user: LoginReq) => {
    try {
      const { data }: AxiosResponse<LoginRes> = await baseInstance.post(
        `/users/login`,
        user,
      );
      return data;
    } catch (err: any) {
      if (err.response.status === 401) {
        return err.response.data;
      }
    }
  },
  emailCheck: async (email: string) => {
    try {
      const { data }: AxiosResponse<EmailCheckRes> = await baseInstance.post(
        `/users/check-email`,
        { email },
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
  join: async (formData: JoinReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await baseInstance.post(
        `/users/join`,
        formData,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
  getUserInfo: async () => {
    try {
      const { data }: AxiosResponse<UserInfoRes> = await authInstance.get(
        `/users`,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
  deleteAccount: async () => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.delete(
        `/users`,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
  getTopFive: async () => {
    try {
      const { data }: AxiosResponse<TopFiveRes[]> = await baseInstance.get(
        `/users/top`,
      );
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
};
