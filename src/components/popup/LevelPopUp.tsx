import { ICONS } from '@/assets/icon/icons';
import PopUpLayout from '../layouts/PopUpLayout';
import LevelItem from './item/LevelItem';
import styled from 'styled-components';
import { levelData } from '@/data/levelData';

interface Props {
  closePopup: () => void;
}

function LevelPopUp({ closePopup }: Props) {
  return (
    <PopUpLayout
      title='레벨'
      desc='지식을 공유하고 레벨을 올려보세요!'
      icon={ICONS.level}
      closePopup={closePopup}>
      <Container>
        {levelData.map((data) => (
          <LevelItem key={data.level} levelData={data} />
        ))}
      </Container>
    </PopUpLayout>
  );
}

export default LevelPopUp;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
