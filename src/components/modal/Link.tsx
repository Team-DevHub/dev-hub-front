import styled from 'styled-components';
import LinkIcon from '@/assets/icon/link-icon.svg?react';
function Link() {
  return (
    <>
      <Container>
        <LinkIcon />
      </Container>
    </>
  );
}

export default Link;

const Container = styled.div`
  width: 100%;
  border-radius: 12px;
  padding: 11px;
  background-color: ${({ theme }) => theme.color_keyWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
`;
