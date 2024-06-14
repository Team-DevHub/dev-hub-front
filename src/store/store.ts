import { Post } from '@/types/api/response';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface Store {
  selectedPost: Post | null;
  setSelectedPost: (post: Post | null) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
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
