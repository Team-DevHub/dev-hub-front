import { LEVEL, LevelKeys, LevelType } from '@/constants/level';
import useStore from '@/store/store';
import { useEffect, useState } from 'react';

export const useLevel = () => {
  const [userLevel, setUserLevel] = useState<LevelType>(LEVEL[1]);
  const { user } = useStore();

  useEffect(() => {
    setUserLevel(LEVEL[user?.level as LevelKeys]);
  }, [user?.level]);

  return { userLevel };
};
