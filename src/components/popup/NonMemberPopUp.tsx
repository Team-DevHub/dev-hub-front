import PopUpLayout from '../layouts/PopUpLayout';
import { ICONS } from '@/assets/icon/icons';
import FormButton from '../common/FormInput/FormButton';
import { useNavigate } from 'react-router-dom';
import Musseuk from '@/assets/image/warning-musseuk.svg?react';
import styled from 'styled-components';
import { LOGIN_ROUTER_PATH } from '@/constants/path';

function NonMemberPopUp({ closePopUp }: { closePopUp: () => void }) {
  const navigate = useNavigate();
  return (
    <PopUpLayout
      icon={ICONS.warning}
      title='회원 전용 서비스'
      desc='로그인하고 지식 공유에 참여해보세요!'
      closePopup={closePopUp}>
      <Container>
        <Musseuki />
        <FormButton
          text='로그인하러 가기'
          fontSize='14px'
          onClick={() => navigate(LOGIN_ROUTER_PATH.login)}
        />
      </Container>
    </PopUpLayout>
  );
}

export default NonMemberPopUp;

const Container = styled.div`
  width: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
`;

const Musseuki = styled(Musseuk)`
  margin-left: 30px;
`;
