import { userAPI } from '@/api/requests/userAPI';
import { useState } from 'react';

interface Check {
  canUse: boolean | null;
  message: string;
}

export const useVerification = () => {
  const [nameCheck, setNameCheck] = useState<Check>({
    canUse: null,
    message: '',
  });
  const [emailCheck, setEmailCheck] = useState<Check>({
    canUse: null,
    message: '',
  });

  const checkEmail = async (email: string) => {
    await userAPI.emailCheck(email).then((data) => {
      if (data?.result) {
        setEmailCheck({ canUse: true, message: '사용 가능한 이메일입니다' });
      } else {
        setEmailCheck({
          canUse: false,
          message: '이미 사용 중인 이메일입니다',
        });
      }
    });
  };

  const checkName = async (nickname: string) => {
    await userAPI.nameCheck(nickname.trim()).then((data) => {
      if (data?.result) {
        setNameCheck({ canUse: true, message: '사용 가능한 닉네임입니다' });
      } else {
        setNameCheck({
          canUse: false,
          message: '이미 사용 중인 닉네임입니다',
        });
      }
    });
  };

  const resetEmailStatus = () => {
    setEmailCheck({
      canUse: null,
      message: '',
    });
  };

  const resetNameStatus = () => {
    setNameCheck({
      canUse: null,
      message: '',
    });
  };

  return {
    emailCheck,
    nameCheck,
    checkEmail,
    checkName,
    resetEmailStatus,
    resetNameStatus,
  };
};
