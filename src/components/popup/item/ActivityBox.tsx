import React from 'react';
import styled from 'styled-components';
import DeleteMusseuk from '@/assets/image/delete-musseuk.svg?react';

function ActivityBox() {
  return (
    <Container>
      <h5>하영님의 활동 기록</h5>
      <Musseuk />
      <Box>
        <Acivity>
          <span>공유한 지식</span>
          <h5>19건</h5>
        </Acivity>
        <Acivity>
          <span>보유 포인트</span>
          <h5>204점</h5>
        </Acivity>
      </Box>
    </Container>
  );
}

export default ActivityBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  padding: 24px 0;
`;

const Musseuk = styled(DeleteMusseuk)`
  position: absolute;
  top: -30px;
  right: 20px;
`;

const Box = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  background-color: ${({ theme }) => theme.color_bgWhite};
  border-radius: 12px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 5;
`;

const Acivity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & span {
    color: ${({ theme }) => theme.color_textBlack};
    font-size: ${({ theme }) => theme.fontSize_base};
    font-weight: 500;
  }
`;
