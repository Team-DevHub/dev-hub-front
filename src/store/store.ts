import { Post } from '@/types/api/response';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface User {
  userId: string;
  nickname: string;
  email: string;
  joinDate: string;
  level: number;
  totalPosts: number;
  totalPoints: number;
}

interface Store {
  user: User | null;
  setUserId: (id: string) => void;
  setUserInfo: (data: User) => void;
  logOut: () => void;

  selectedPost: Post | null;
  setSelectedPost: (post: Post | null) => void;
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
              email: '',
              joinDate: '',
              level: 1,
              totalPoints: 0,
              totalPosts: 0,
            },
          })),
        selectedPost: null,
        setUserInfo: (userData: User) => {
          set(() => ({
            user: userData,
          }));
        },
        logOut: () => set(() => ({ user: null })),
        setSelectedPost: (post: Post | null) => {
          set(() => ({
            selectedPost: post,
          }));
        },
      }),
      {
        name: 'store',
      },
    ),
  ),
);

export default useStore;
