import { postAPI } from '@/api/requests/postAPI';
import { PostSummary } from '@/models/post.model';
import { useConfirm, usePopUpActions } from '@/store/popUpStore';
import { useEffect, useState } from 'react';

export const useMyPosts = () => {
  const { isConfirmed } = useConfirm();
  const { setIsConfirmOpen, setIsDeleted } = usePopUpActions();
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);
  const [myPosts, setMyPosts] = useState<PostSummary[] | null>(null);

  const fetchMyPosts = async () => {
    const params = { myPage: true };
    const response = await postAPI.posts(params);
    setMyPosts(response.result);
  };

  const deletePost = async () => {
    const response = await postAPI.deletePost(deleteTarget!);
    if (response?.isSuccess) {
      setIsDeleted(true);
    }
  };

  const handleDelete = (postId: number) => {
    setDeleteTarget(postId);
    setIsConfirmOpen(true);
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  useEffect(() => {
    if (isConfirmed) {
      deletePost();
    }
  }, [isConfirmed]);

  return { myPosts, handleDelete };
};
