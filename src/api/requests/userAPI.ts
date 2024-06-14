import { authInstance, baseInstance } from '../instance';
import { AxiosResponse } from 'axios';
import { API_ERROR_MSG } from '@/constants/message';
import {
  EmailCheckRes,
  JoinReq,
  LoginReq,
  LoginRes,
  RequestResetReq,
  TopFiveRes,
  UserInfoRes,
} from '@/models/user.model';
import { CommonRes } from '@/models/common.model';

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
      } else {
        window.alert(API_ERROR_MSG);
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
      window.alert(API_ERROR_MSG);
    }
  },
  nameCheck: async (nickname: string) => {
    try {
      const { data }: AxiosResponse<EmailCheckRes> = await baseInstance.post(
        `/users/check-nickname`,
        { nickname },
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
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
      window.alert(API_ERROR_MSG);
    }
  },
  requestReset: async (userData: RequestResetReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await baseInstance.post(
        `/users/password`,
        userData,
      );
      return data;
    } catch (err: any) {
      if (err.response.status === 403) {
        return err.response.data;
      } else {
        window.alert(API_ERROR_MSG);
      }
    }
  },
  resetPassword: async (formData: LoginReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await baseInstance.put(
        `/users/password`,
        formData,
      );
      return data;
    } catch (err: any) {
      if (err.response.status === 403) {
        return err.response.data;
      } else {
        window.alert(API_ERROR_MSG);
      }
    }
  },
  getUserInfo: async () => {
    try {
      const { data }: AxiosResponse<UserInfoRes> = await authInstance.get(
        `/users`,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
  deleteAccount: async () => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.delete(
        `/users`,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
  getTopFive: async () => {
    try {
      const { data }: AxiosResponse<TopFiveRes[]> = await baseInstance.get(
        `/users/top`,
      );
      return data;
    } catch (err) {
      window.alert(API_ERROR_MSG);
    }
  },
};
