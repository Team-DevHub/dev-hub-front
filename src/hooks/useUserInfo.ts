import { userAPI } from '@/api/requests/userAPI';
import { LEVEL, LevelKeys, LevelType } from '@/constants/level';
import useSessionStore from '@/store/sessionStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useUserInfo = () => {
  const { isLoggedIn } = useSessionStore();
  const [userLevel, setUserLevel] = useState<LevelType>(LEVEL[1]);

  const { data, refetch } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await userAPI.getUserInfo().then((res) => res?.result),
    enabled: isLoggedIn,
  });

  useEffect(() => {
    if (isLoggedIn) {
      setUserLevel(LEVEL[data?.level as LevelKeys]);
    }
  }, [isLoggedIn, data?.level]);

  return { userData: isLoggedIn ? data : null, userLevel, refetch };
};
