import { Level } from '@/data/levelData';
import styled from 'styled-components';

interface Props {
  levelData: Level;
}

function LevelItem({ levelData }: Props) {
  return (
    <Container>
      <img src={levelData.icon} alt='icon' />
      <LevelInfo>
        <h5>{levelData.level}</h5>
        <span>{levelData.name}</span>
      </LevelInfo>
      <h6>{levelData.points}</h6>
    </Container>
  );
}

export default LevelItem;

const Container = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color_borderGray};

  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`;

const LevelInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & span {
    color: ${({ theme }) => theme.color_textBlack};
    font-size: ${({ theme }) => theme.fontSize_sm};
  }
`;
