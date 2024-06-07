import { userAPI } from '@/api/userAPI';
import { TokenKey } from '@/constants/storage';
import useStore from '@/store/store';
import { useEffect } from 'react';

export const useProfile = () => {
  const { setUserInfo } = useStore();

  useEffect(() => {
    const getUser = async () => {
      await userAPI.getUserInfo().then((res) => {
        setUserInfo(res!.result);
      });
    };

    // 비회원일 경우 fetch 안함
    if (localStorage.getItem(TokenKey)) {
      getUser();
    }
  }, []);
};
