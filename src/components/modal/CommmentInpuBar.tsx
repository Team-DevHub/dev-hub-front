import styled from 'styled-components';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { ICONS } from '../../constants/assets';
import useStore from '@/store/store';
import { Input } from '@/styles/component';
import { postAPI } from '@/api/requests/postAPI';
import { useUserInfo } from '@/hooks/useUserInfo';

interface CommentsForm {
  postId: number;
  content: string;
}

function CommentInputBar() {
  const { userData } = useUserInfo();
  const { selectedPost, setSelectedPost } = useStore();
  const [form, setForm] = useState<CommentsForm>({
    postId: selectedPost?.postId || 0,
    content: '',
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({ ...prevForm, content: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.content.trim()) {
      return;
    }
    const response = await postAPI.comments({
      postId: selectedPost!.postId,
      content: form.content,
    });

    if (response?.isSuccess) {
      const updatedPost = await postAPI.post(selectedPost!.postId);

      if (updatedPost?.isSuccess) {
        setSelectedPost(updatedPost.result);
        setForm({ ...form, content: '' });
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Container>
      <StyledInput
        placeholder={
          userData === null
            ? '로그인 후 댓글을 작성할 수 있습니다'
            : '댓글 달기'
        }
        value={form.content}
        onChange={handleFormChange}
        onKeyDown={handleKeyDown}
        $isLoggedIn={userData !== null}
        disabled={userData === null}
      />
      <SubmitButton disabled={userData === null}>
        <img src={ICONS.send} alt='send' onClick={handleSubmit} />
      </SubmitButton>
    </Container>
  );
}

export default CommentInputBar;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const StyledInput = styled(Input)<{ $isLoggedIn: boolean }>`
  flex: 1;

  &::placeholder {
    color: ${({ theme, $isLoggedIn }) =>
      $isLoggedIn ? theme.color_textGray : 'rgba(144, 144, 144, 0.5)'};
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
`;
