import { authAPI } from '@/api/requests/authAPI';
import { userAPI } from '@/api/requests/userAPI';
import { JoinForm } from '@/components/account/JoinForm';
import { LoginForm } from '@/components/account/LoginForm';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REMEMBER_ME,
  SOCIAL_TYPE_KEY,
} from '@/constants/storage';
import { usePopUpActions } from '@/store/popUpStore';
import useSessionStore from '@/store/sessionStore';
import { removeAllTokens, setToken } from '@/utils/token';
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
        localStorage.setItem(REMEMBER_ME, isChecked ? 'true' : 'false');

        // 토큰 저장
        setToken(ACCESS_TOKEN_KEY, data.accessToken!);
        setToken(REFRESH_TOKEN_KEY, data.refreshToken!);

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
    localStorage.setItem(REMEMBER_ME, 'true');

    if (result?.isSuccess) {
      setToken(ACCESS_TOKEN_KEY, result.accessToken!);
      setToken(REFRESH_TOKEN_KEY, result.refreshToken!);

      localStorage.removeItem(SOCIAL_TYPE_KEY);
      setIsLoggedIn(true);
      navigate('/', { replace: true });
    }
  }, []);

  const logOut = () => {
    setIsLoggedIn(false);
    clearStorage();
    removeAllTokens();
    navigate(LOGIN_ROUTER_PATH.login);
  };

  const deleteAccount = async () => {
    await userAPI.deleteAccount().then((res) => {
      if (res?.isSuccess) {
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
