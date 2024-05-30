import { LoginReq } from '@/types/api/request';
import { baseInstance } from './instance';

export const userAPI = {
  login: async (user: LoginReq) => {
    try {
      const { data } = await baseInstance.post(`/users/login`, user);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
