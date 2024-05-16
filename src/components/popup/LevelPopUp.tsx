import { ICONS } from '@/assets/icon/icons';
import PopUpLayout from './PopUpLayout';

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
      d
    </PopUpLayout>
  );
}

export default LevelPopUp;
