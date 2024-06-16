import { useMutation } from '@tanstack/react-query';
import { postAPI } from '@/api/requests/postAPI';
import usePostStore from '@/store/postStore';
import { usePopUpActions } from '@/store/popUpStore';

export const useComment = () => {
  const { setIsOpenAlert } = usePopUpActions();
  const { selectedPost, setSelectedPost } = usePostStore();

  const deleteCommentMutation = useMutation({
    mutationFn: async (commentId: number) => {
      return await postAPI.deleteComment(commentId);
    },
    onSuccess: async () => {
      if (selectedPost) {
        const updatedPost = await postAPI.post(selectedPost.postId);
        setSelectedPost(updatedPost.result);
        setIsOpenAlert(true, 'comment');
      }
    },
  });

  const deleteComment = (commentId: number) => {
    deleteCommentMutation.mutate(commentId);
  };

  return { deleteComment };
};
