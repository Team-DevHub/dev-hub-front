import PopUpLayout from '../layouts/PopUpLayout';
import { ICONS, IMAGES } from '@/constants/icons';
import FormButton from '../common/FormInput/FormButton';
import { useNavigate } from 'react-router-dom';
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
        <Musseuki src={IMAGES.musseuk.warning} alt='warning' />
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

const Musseuki = styled.img`
  width: 150px;
  margin-left: 30px;
`;
