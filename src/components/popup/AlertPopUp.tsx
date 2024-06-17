import Lottie from 'lottie-react';
import styled from 'styled-components';
import CheckLottie from '@public/assets/lottie/check.json';
import AlertLayout from '../layouts/AlertLayout';

interface Props {
  children: React.ReactNode;
}

function AlertPopUp({ children }: Props) {
  return (
    <AlertLayout>
      <Check>
        <Lottie animationData={CheckLottie} loop={false} />
      </Check>
      <Text>{children}</Text>
    </AlertLayout>
  );
}

export default AlertPopUp;

export const Check = styled.div`
  width: 80px;
  height: 80px;
`;

export const Text = styled.span`
  padding: 10px 0;
`;
