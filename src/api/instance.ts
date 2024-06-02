import { TokenKey } from '@/constants/storage';
import axios from 'axios';
// const baseUrl = 'http://localhost:8888';
const baseUrl = 'http://dev-hub.ap-northeast-2.elasticbeanstalk.com';

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

authInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// authInstance 요청에 대한 interceptor -> 요청 직전 header에 access token 추가
authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TokenKey);
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
