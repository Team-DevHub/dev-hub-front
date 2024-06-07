import { ICONS } from '@/assets/icon/icons';
import { Input } from '@/styles/component';
import { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

function FeedBackInput() {
  const [disabled, setDisabled] = useState(false);
  const [feedback, setFeedback] = useState<string>('');

  const handleSend = () => {
    setDisabled(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID!,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
        { message: feedback },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY!,
      )
      .then(() => {
        window.alert('피드백이 전달되었습니다.');
        setDisabled(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FeedBack>
      <span>DevHub 팀에게 소중한 피드백을 전달해주세요!</span>
      <div className='inputWrapper'>
        <Input
          type='text'
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <SendIcon type='button' onClick={handleSend} disabled={disabled}>
          <img src={ICONS.share} alt='send' />
        </SendIcon>
      </div>
    </FeedBack>
  );
}

export default FeedBackInput;

const FeedBack = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_keyBlue_light};
    margin-left: 4px;
    font-weight: 500;
  }

  .inputWrapper {
    width: fit-content;
    display: flex;
    gap: 10px;

    input {
      width: 300px;
    }
  }
`;

const SendIcon = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color_keyBlue};
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.15s ease-in;

  img {
    margin-right: 2px;
  }

  &:hover {
    opacity: 1;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color_textGray};
  }
`;
