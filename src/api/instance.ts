import { ACCESS_TOKEN_KEY } from '@/constants/storage';
import useSessionStore from '@/store/sessionStore';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;

// token 인증이 필요 없는 요청
export const baseInstance = axios.create({
  baseURL: baseUrl,
});

// token 인증이 필요한 요청
export const authInstance = axios.create({
  baseURL: baseUrl,
});

baseInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

let isAlreadyAlerted = false; // 전역 플래그 변수

authInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401 && !isAlreadyAlerted) {
      isAlreadyAlerted = true;
      const setIsLoggedIn = useSessionStore.getState().setIsLoggedIn;
      setIsLoggedIn(false);
      window.alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      window.location.href = '/account/login';
    }
    return Promise.reject(err);
  },
);

authInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) {
      token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    }
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
