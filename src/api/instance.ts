import axios from 'axios';
const baseUrl = 'http://localhost:8888';

// token 인증이 필요 없는 요청
export const baseInstance = axios.create({
  baseURL: baseUrl,
});

// token 인증이 필요한 요청
export const authInstance = axios.create({
  baseURL: baseUrl,
});

// authInstance 요청에 대한 interceptor -> 요청 직전 header에 access token 추가
authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
