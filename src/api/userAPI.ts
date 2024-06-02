import { JoinReq, LoginReq } from '@/types/api/request';
import { baseInstance } from './instance';

export const userAPI = {
  login: async (user: LoginReq) => {
    try {
      const { data } = await baseInstance.post(`/users/login`, user);
      return data;
    } catch (err: any) {
      if (err.response.status === 401) {
        return err.response.data;
      }
    }
  },
  emailCheck: async (email: string) => {
    try {
      const { data } = await baseInstance.post(`/users/check-email`, { email });
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
  join: async (formData: JoinReq) => {
    try {
      const { data } = await baseInstance.post(`/users/join`, formData);
      return data;
    } catch (err) {
      window.alert('오류가 발생했습니다.');
    }
  },
};
