import { userAPI } from '@/api/userAPI';
import { JoinForm } from '@/components/account/JoinForm';
import { LoginForm } from '@/components/account/LoginForm';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { TokenKey, UserEmailKey, UserPasswordKey } from '@/constants/storage';
import useStore from '@/store/store';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState<string>('');
  const navigate = useNavigate();
  const clearStorage = useStore.persist.clearStorage;

  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await userAPI.getUserInfo().then((res) => res?.result),
    enabled: !!localStorage.getItem(TokenKey), // 비회원일 경우 fetch 안함
  });

  const join = async (data: JoinForm) => {
    await userAPI
      .join({
        nickname: data.nickname.trim(),
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        if (data?.isSuccess) {
          alert('회원가입 되었습니다.');
          navigate('/account/login');
        }
      });
  };

  const logIn = async (formData: LoginForm, isChecked: boolean) => {
    await userAPI.login(formData).then((data) => {
      if (data.isSuccess) {
        localStorage.setItem(TokenKey, data.accessToken!);

        // 로그인 정보 저장
        if (isChecked) {
          localStorage.setItem(UserEmailKey, formData.email);
          localStorage.setItem(UserPasswordKey, formData.password);
        } else {
          localStorage.removeItem(UserEmailKey);
          localStorage.removeItem(UserPasswordKey);
        }

        navigate('/', { replace: true });
      } else {
        setLoginError('이메일 또는 비밀번호가 틀렸습니다');
      }
    });
  };

  const logOut = () => {
    localStorage.removeItem(TokenKey);
    clearStorage();
    setIsLoggedIn(false);
    navigate(LOGIN_ROUTER_PATH.login);
  };

  return {
    userData: data || null,
    isLoggedIn,
    join,
    logIn,
    logOut,
    loginError,
  };
};
