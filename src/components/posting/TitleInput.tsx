import React from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TitleInput({ value, onChange }: Props) {
  return (
    <Container>
      <h2>제목</h2>
      <StyledInput
        type='text'
        value={value}
        placeholder='제목을 입력하세요.'
        onChange={onChange}
      />
    </Container>
  );
}

export default TitleInput;

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
