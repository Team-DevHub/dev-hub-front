import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface User {
  userId: string;
  nickname: string;
  level: number;
  totalPosts: number;
  totalPoints: number;
}

interface Store {
  user: User | null;
  setUserId: (id: string) => void;
  setUserInfo: (data: User) => void;
  logOut: () => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        user: null,
        setUserId: (id: string) =>
          set(() => ({
            user: {
              userId: id,
              nickname: '',
              level: 1,
              totalPoints: 0,
              totalPosts: 0,
            },
          })),
        setUserInfo: (userData: User) => {
          set(() => ({
            user: userData,
          }));
        },
        logOut: () => set(() => ({ user: null })),
      }),
      {
        name: 'store',
      },
    ),
  ),
);

export default useStore;
