import styled from 'styled-components';
import AlertLayout from '../layouts/AlertLayout';
import { ICONS } from '../../constants/assets';
import { Check, Text } from './AlertPopUp';
import Lottie from 'lottie-react';
import CheckLottie from '@public/assets/lottie/check.json';
import { useConfirm, usePopUpActions } from '@/store/popUpStore';

function ConfirmPopUp() {
  const { isDeleted } = useConfirm();
  const { setIsConfirmed } = usePopUpActions();

  return (
    <AlertLayout>
      {isDeleted ? (
        <>
          <Check>
            <Lottie animationData={CheckLottie} loop={false} />
          </Check>
          <Text>게시글 삭제 완료!</Text>
        </>
      ) : (
        <Wrapper>
          <TitleBox>
            <DeleteIcon>
              <img src={ICONS.delete.white} alt='x' width={22} height={22} />
            </DeleteIcon>
            <span>정말 삭제하시겠어요?</span>
          </TitleBox>
          <ButtonContainer>
            <Button $isActive={true} onClick={() => setIsConfirmed(true)}>
              삭제
            </Button>
            <Button $isActive={false}>취소</Button>
          </ButtonContainer>
        </Wrapper>
      )}
    </AlertLayout>
  );
}

export default ConfirmPopUp;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 10px 0;
`;

const DeleteIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color_textRed};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Button = styled.button<{ $isActive: boolean }>`
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.color_key : theme.color_borderGray};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color_textWhite : theme.color_textBlack};
  padding: 10px;
  border-radius: 8px;
  font-weight: 700;
`;
