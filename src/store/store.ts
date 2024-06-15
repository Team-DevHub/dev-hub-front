import { Post } from '@/models/post.model';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface Store {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  selectedPost: Post | null;
  setSelectedPost: (post: Post | null) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        isLoggedIn: false,
        setIsLoggedIn: (value: boolean) => {
          set(() => ({ isLoggedIn: value }));
        },
        selectedPost: null,
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
