import styled from 'styled-components';
import { ICONS } from '../../constants/icons';
import { useNavigate } from 'react-router-dom';

function MyPostEmpty() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/posting');
  };

  return (
    <Container>
      <p>아직 공유한 지식이 없습니다.</p>
      <Content onClick={handleNavigate}>
        <span>지식 공유하러 가기</span>
        <ArrowIcon src={ICONS.back} alt='' />
      </Content>
    </Container>
  );
}

export default MyPostEmpty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 150px 0;

  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_lg};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.color_keyBlue};
    font-size: ${({ theme }) => theme.fontSize_md};
  }
`;

const ArrowIcon = styled.img`
  transform: rotate(180deg);
`;
