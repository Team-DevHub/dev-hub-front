import { postAPI } from '@/api/requests/postAPI';
import { PostingReq } from '@/models/post.model';
import { useCallback } from 'react';

export const useEdit = () => {
  const editPost = useCallback(async (postId: number, postData: PostingReq) => {
    return await postAPI.editPost(postId, postData);
  }, []);

  return { editPost };
};
