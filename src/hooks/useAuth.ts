import { authAPI } from '@/api/requests/authAPI';
import { userAPI } from '@/api/requests/userAPI';
import { JoinForm } from '@/components/account/JoinForm';
import { LoginForm } from '@/components/account/LoginForm';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  SOCIAL_TYPE_KEY,
} from '@/constants/storage';
import { usePopUpActions } from '@/store/popUpStore';
import useSessionStore from '@/store/sessionStore';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useAuth = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const { setIsLoggedIn } = useSessionStore();
  const { setIsOpenAlert } = usePopUpActions();
  const [loginError, setLoginError] = useState<string>('');
  const navigate = useNavigate();
  const clearStorage = useSessionStore.persist.clearStorage;

  const join = async (data: JoinForm) => {
    await userAPI
      .join({
        nickname: data.nickname.trim(),
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        if (data?.isSuccess) {
          setIsOpenAlert(true, 'join');
        }
      });
  };

  const logIn = async (formData: LoginForm, isChecked: boolean) => {
    await userAPI.login(formData).then((data) => {
      if (data.isSuccess) {
        // 로그인 정보 저장
        if (isChecked) {
          localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken!);
          localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken!);
        } else {
          sessionStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken!);
          sessionStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken!);
        }
        setIsLoggedIn(true);
        navigate('/', { replace: true });
      } else {
        setLoginError('이메일 또는 비밀번호가 틀렸습니다');
      }
    });
  };

  const handleSocialLogin = useCallback(async (code: string) => {
    const type = localStorage.getItem(SOCIAL_TYPE_KEY);

    let result;
    if (type === 'github') {
      result = await authAPI.requestGithubLogin(code);
    } else {
      result = await authAPI.requestGoogleLogin(code);
    }

    if (result?.isSuccess) {
      localStorage.setItem(ACCESS_TOKEN_KEY, result.accessToken!);
      localStorage.removeItem(SOCIAL_TYPE_KEY);
      setIsLoggedIn(true);
      navigate('/', { replace: true });
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setIsLoggedIn(false);
    clearStorage();
    navigate(LOGIN_ROUTER_PATH.login);
  };

  const deleteAccount = async () => {
    await userAPI.deleteAccount().then((res) => {
      if (res?.isSuccess) {
        clearStorage();
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        logOut();
      }
    });
  };

  useEffect(() => {
    if (code) {
      handleSocialLogin(code);
    }
  }, [code, handleSocialLogin]);

  return {
    join,
    logIn,
    logOut,
    loginError,
    deleteAccount,
  };
};
