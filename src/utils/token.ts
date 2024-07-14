import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REMEMBER_ME,
  SOCIAL_TYPE_KEY,
} from '@/constants/storage';

const getStorage = (key: string) => {
  const remember = localStorage.getItem(REMEMBER_ME) === 'true';
  return remember ? localStorage.getItem(key) : sessionStorage.getItem(key);
};

const setStorage = (key: string, value: string) => {
  const remember = localStorage.getItem(REMEMBER_ME) === 'true';
  remember
    ? localStorage.setItem(key, value)
    : sessionStorage.setItem(key, value);
};

export const getTokens = () => {
  const accessToken = getStorage(ACCESS_TOKEN_KEY);
  const refreshToken = getStorage(REFRESH_TOKEN_KEY);
  return { accessToken, refreshToken };
};

export const getAccessToken = () => {
  const accessToken = getStorage(ACCESS_TOKEN_KEY);
  return { accessToken };
};

export const setToken = (key: string, newValue: string) => {
  setStorage(key, newValue);
};

export const removeAllTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(REMEMBER_ME);
  localStorage.removeItem(SOCIAL_TYPE_KEY);
};
