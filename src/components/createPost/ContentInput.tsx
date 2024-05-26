import { useState } from 'react';
import styled from 'styled-components';

function ContentInput() {
  const [value, setValue] = useState<string>('');

  return (
    <Container>
      <h2>공유할 내용</h2>
      <StyledInput
        type='text'
        value={value}
        placeholder='내용를 입력하세요.'
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  );
}

export default ContentInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;

  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_md};
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 8px;
`;