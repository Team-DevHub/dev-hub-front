import { postAPI } from '@/api/requests/postAPI';
import { useConfirm, usePopUpActions } from '@/store/popUpStore';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useMyPosts = () => {
  const { isConfirmed } = useConfirm();
  const { setIsConfirmOpen, setIsDeleted } = usePopUpActions();
  const [deletePost, setDeletePost] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { data: myPosts } = useQuery({
    queryKey: ['myPosts'],
    queryFn: async () => {
      const response = await postAPI.posts({ myPage: true });
      return response.result || [];
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (postId: number) => {
      return await postAPI.deletePost(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myPosts'] });
      setIsDeleted(true);
    },
  });

  const handleDelete = (postId: number) => {
    setDeletePost(postId);
    setIsConfirmOpen(true);
  };

  useEffect(() => {
    if (isConfirmed && deletePost !== null) {
      deletePostMutation.mutate(deletePost);
    }
  }, [isConfirmed, deletePost]);

  return { myPosts, handleDelete };
};
