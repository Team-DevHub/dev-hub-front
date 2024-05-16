import PopUpLayout from './PopUpLayout';

interface Props {
  closePopup: () => void;
}

function LevelPopUp({ closePopup }: Props) {
  return <PopUpLayout closePopup={closePopup}>d</PopUpLayout>;
}

export default LevelPopUp;
