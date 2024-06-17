import { Post } from '@/models/post.model';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  selectedPost: Post | null;
  setSelectedPost: (post: Post | null) => void;
}

const usePostStore = create<Store>()(
  devtools(
    (set) => ({
      selectedPost: null,
      setSelectedPost: (post: Post | null) => {
        set(() => ({
          selectedPost: post,
        }));
      },
    }),
    {
      name: 'PostStore',
    },
  ),
);

export default usePostStore;
