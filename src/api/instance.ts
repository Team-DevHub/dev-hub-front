import { ACCESS_TOKEN_KEY } from '@/constants/storage';
import useSessionStore from '@/store/sessionStore';
import {
  getAccessToken,
  getTokens,
  removeAllTokens,
  setToken,
} from '@/utils/token';
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

authInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getAccessToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      config.headers['Authorization'] = ''; // accessToken이 null인 경우 빈값으로 설정
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let isAlreadyAlerted = false; // 전역 플래그 변수

authInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (status === 401 && !isAlreadyAlerted) {
      const originRequest = config; // 실패한 기존 요청
      const { accessToken, refreshToken } = getTokens();

      // access token 재발급
      try {
        const result = await baseInstance.post('/users/refresh', null, {
          headers: {
            authorization: `Bearer ${accessToken}`,
            refresh: `Bearer ${refreshToken}`,
          },
        });

        // 새로운 access token 발급된 경우
        const newAccessToken = result.data.accessToken;
        setToken(ACCESS_TOKEN_KEY, newAccessToken);

        originRequest.headers['authorization'] = `Bearer ${newAccessToken}`; // 기존 요청 헤더에 담기
        return authInstance(originRequest);
      } catch (err) {
        // access token 발급 실패한 경우 -> 재로그인
        isAlreadyAlerted = true;
        useSessionStore.getState().setIsLoggedIn(false);
        window.alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
        removeAllTokens();
      }
      window.location.href = '/account/login';
    }
    return Promise.reject(err);
  },
);
