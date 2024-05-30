import { baseInstance } from './instance';

export const userAPI = {
  login: async (email: string, password: string) => {
    try {
      const { data } = await baseInstance.post(`/users/login`, {
        email,
        password,
      });
      return data;
    } catch (err) {
      return err;
    }
  },
};
