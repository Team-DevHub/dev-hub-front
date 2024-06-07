import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { ICONS } from '@/assets/icon/icons';
import useStore from '@/store/store';
import { Input } from '@/styles/component';

function CommentInputBar() {
  const { user } = useStore();
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <Container>
      <StyledInput
        placeholder={
          user === null ? '로그인 후 댓글을 작성할 수 있습니다' : '댓글 달기'
        }
        value={inputText}
        onChange={handleInputChange}
        $isLoggedIn={user !== null}
        disabled={user === null}
      />
      <SubmitButton disabled={user === null}>
        <img src={ICONS.send} alt='send' />
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
