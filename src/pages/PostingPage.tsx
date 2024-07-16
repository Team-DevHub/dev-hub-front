import { useNavigate } from 'react-router-dom';
import { postAPI } from '@/api/requests/postAPI';
import PostingForm from '@/components/modal/PostForm';
import { usePopUpActions } from '@/store/popUpStore';

function CreatePostPage() {
  const navigate = useNavigate();
  const { setIsOpenAlert } = usePopUpActions();

  const handleCreatePost = async (data: PostingForm) => {
    const response = await postAPI.posting({
      categoryId: data.category_id,
      title: data.title,
      content: data.content,
      links: data.links,
    });
    if (response?.isSuccess) {
      setIsOpenAlert(true, 'posting');
      navigate('/');
    }
  };
  const initialValues: PostingForm = {
    category_id: 0,
    title: '',
    content: '',
    links: [''],
  };

  return (
    <PostingForm onSubmit={handleCreatePost} initialValues={initialValues} />
  );
}

export default CreatePostPage;
