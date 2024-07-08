import { postAPI } from '@/api/requests/postAPI';
import { useConfirm, usePopUpActions } from '@/store/popUpStore';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PostSummary } from '@/models/post.model';

export const useMyPosts = () => {
  const { isConfirmed } = useConfirm();
  const { setIsConfirmOpen, setIsDeleted } = usePopUpActions();
  const [deletePost, setDeletePost] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { data: myPosts } = useQuery<PostSummary[]>({
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

  const { data: myScraps } = useQuery<PostSummary[]>({
    queryKey: ['myScraps'],
    queryFn: async () => {
      const response = await postAPI.myscrap();
      return response.result || [];
    },
  });

  const unscrapMutation = useMutation({
    mutationFn: async (postId: number) => {
      return await postAPI.unscrap(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myScraps'] });
    },
  });
  const handleUnscrap = async (postId: number) => {
    unscrapMutation.mutate(postId);
  };
  return { myPosts, myScraps, handleDelete, handleUnscrap };
};
