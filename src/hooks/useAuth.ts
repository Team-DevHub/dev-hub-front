import { authAPI } from '@/api/requests/authAPI';
import { userAPI } from '@/api/requests/userAPI';
import { JoinForm } from '@/components/account/JoinForm';
import { LoginForm } from '@/components/account/LoginForm';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import {
  SocialLoginKey,
  TokenKey,
  UserEmailKey,
  UserPasswordKey,
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
        localStorage.setItem(TokenKey, data.accessToken!);

        // 로그인 정보 저장
        if (isChecked) {
          localStorage.setItem(UserEmailKey, formData.email);
          localStorage.setItem(UserPasswordKey, formData.password);
        } else {
          localStorage.removeItem(UserEmailKey);
          localStorage.removeItem(UserPasswordKey);
        }

        setIsLoggedIn(true);
        navigate('/', { replace: true });
      } else {
        setLoginError('이메일 또는 비밀번호가 틀렸습니다');
      }
    });
  };

  const handleSocialLogin = useCallback(async (code: string) => {
    const type = localStorage.getItem(SocialLoginKey);

    let result;
    if (type === 'github') {
      result = await authAPI.requestGithubLogin(code);
    } else {
      result = await authAPI.requestGoogleLogin(code);
    }

    if (result?.isSuccess) {
      localStorage.setItem(TokenKey, result.accessToken!);
      localStorage.removeItem(SocialLoginKey);
      setIsLoggedIn(true);
      navigate('/', { replace: true });
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem(TokenKey);
    setIsLoggedIn(false);
    clearStorage();
    navigate(LOGIN_ROUTER_PATH.login);
  };

  const deleteAccount = async () => {
    await userAPI.deleteAccount().then((res) => {
      if (res?.isSuccess) {
        clearStorage();
        localStorage.removeItem(UserEmailKey);
        localStorage.removeItem(UserPasswordKey);
        localStorage.removeItem(TokenKey);
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
