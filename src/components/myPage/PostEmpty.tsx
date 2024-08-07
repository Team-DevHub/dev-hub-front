import styled from 'styled-components';
import { ICONS } from '../../constants/assets';
import { useNavigate } from 'react-router-dom';

interface EmptyProps {
  message: string;
  buttonText: string;
  path: string;
}

function PostEmpty({ message, buttonText, path }: EmptyProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <Container>
      <p>{message}</p>
      <Content onClick={handleClick}>
        <span>{buttonText}</span>
        <ArrowIcon src={ICONS.back} alt='back' />
      </Content>
    </Container>
  );
}

export default PostEmpty;

const Container = styled.div`
  height: 330px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

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
