import usePostStore from '@/store/postStore';
import { useMutation } from '@tanstack/react-query';
import { postAPI } from '@/api/requests/postAPI';

export const useScrap = () => {
  const { selectedPost, setSelectedPost } = usePostStore();

  const scrapMutation = useMutation({
    mutationFn: async (postId: number) => {
      return postAPI.scrap(postId);
    },
    onSuccess: () => {
      if (selectedPost) {
        setSelectedPost({
          ...selectedPost,
          isScrapped: true,
        });
      }
    },
  });

  const unscrapMutation = useMutation({
    mutationFn: async (postId: number) => {
      return postAPI.unscrap(postId);
    },
    onSuccess: () => {
      if (selectedPost) {
        setSelectedPost({
          ...selectedPost,
          isScrapped: false,
        });
      }
    },
  });

  const toggleScrap = () => {
    if (!selectedPost) return;

    if (selectedPost.isScrapped) {
      unscrapMutation.mutate(selectedPost.postId);
    } else {
      scrapMutation.mutate(selectedPost.postId);
    }
  };

  return { toggleScrap };
};
