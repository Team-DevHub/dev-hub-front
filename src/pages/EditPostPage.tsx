import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEdit } from '@/hooks/useEdit';
import usePostStore from '@/store/postStore';
import PostingForm from '@/components/modal/PostForm';
import { usePopUpActions } from '@/store/popUpStore';

function EditPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { selectedPost } = usePostStore();
  const { editPost } = useEdit();
  const { setIsOpenAlert } = usePopUpActions();
  const [initialValues, setInitialValues] = useState<PostingForm>();

  useEffect(() => {
    if (selectedPost && Number(postId) === selectedPost.postId) {
      setInitialValues({
        category_id: selectedPost.categoryId,
        title: selectedPost.title,
        content: selectedPost.content,
        links: selectedPost.links,
      });
    }
  }, [postId, selectedPost]);

  const handleEditPost = async (data: PostingForm) => {
    const response = await editPost(Number(postId), {
      categoryId: data.category_id,
      title: data.title,
      content: data.content,
      links: data.links,
    });
    if (response!.isSuccess) {
      setIsOpenAlert(true, 'editing');
      navigate('/');
    }
  };

  return (
    <PostingForm
      onSubmit={handleEditPost}
      initialValues={initialValues}
      isEdit
    />
  );
}

export default EditPostPage;
