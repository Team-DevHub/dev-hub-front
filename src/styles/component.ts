import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color_keyBlue};
  border: none;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: fit-content;
  padding: 10px 40px;
  font-size: ${({ theme }) => theme.fontSize_md};
  color: ${({ theme }) => theme.color_textWhite};

  &:hover:not(:disabled) {
    opacity: 0.95;
  }

  & img {
    margin-bottom: 2px;
  }
`;
