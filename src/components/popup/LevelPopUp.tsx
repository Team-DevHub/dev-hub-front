import { ICONS } from '../../constants/assets';
import PopUpLayout from '../layouts/PopUpLayout';
import LevelItem from './item/LevelItem';
import styled from 'styled-components';
import { levelData } from '@/data/levelData';
import { useUserInfo } from '@/hooks/useUserInfo';

interface Props {
  closePopup: () => void;
}

function LevelPopUp({ closePopup }: Props) {
  const { userData } = useUserInfo();

  if (!userData) return null;

  return (
    <PopUpLayout
      title='레벨'
      desc='지식을 공유하고 포인트를 쌓아보세요!'
      icon={ICONS.level}
      closePopup={closePopup}>
      <Container>
        {levelData.map((data) => (
          <LevelItem
            key={data.level}
            levelData={data}
            isCurrentLevel={data.value === userData.level}
          />
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
