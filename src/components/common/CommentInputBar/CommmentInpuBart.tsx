import styled from 'styled-components';
import ArrowIcon from '@/assets/icon/comment-send-icon.svg?react';
import { ChangeEvent, useState } from 'react';

function CommentInputBar() {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <Container>
        <StyledInput
          placeholder='댓글 달기'
          value={inputText}
          onChange={handleInputChange}
        />
        <SubmitButton />
      </Container>
    </>
  );
}

export default CommentInputBar;

const Container = styled.div`
  display: flex;
  width: 500px;
  padding: 0 40px;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  flex: 1;

  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textBlack};
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color_key};
  }
`;

const SubmitButton = styled(ArrowIcon)`
  cursor: pointer;
`;
