import PopUpLayout from '../layouts/PopUpLayout';
import { ICONS } from '../../constants/assets';
import ActivityBox from './item/ActivityBox';
import styled from 'styled-components';
import FormButton from '../common/FormInput/FormButton';
import { useAuth } from '@/hooks/useAuth';

interface Props {
  closePopup: () => void;
}

function DeleteAccountPopUp({ closePopup }: Props) {
  const { deleteAccount } = useAuth();

  return (
    <PopUpLayout
      title='회원 탈퇴'
      desc='회원을 탈퇴 하시겠습니까?'
      icon={ICONS.signout}
      closePopup={closePopup}>
      <ActivityBox />
      <Wrapper>
        <Message>
          회원 탈퇴 시 회원님의 개인 정보(이름, 메일 등), 작성한 지식 공유글을
          포함한 모든 데이터가 영구적으로 삭제되며, 삭제된 데이터는 다시 복구할
          수 없습니다.
        </Message>
        <FormButton text='회원탈퇴' fontSize='14px' onClick={deleteAccount} />
      </Wrapper>
    </PopUpLayout>
  );
}

export default DeleteAccountPopUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Message = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize_xs};
  line-height: 140%;
`;
