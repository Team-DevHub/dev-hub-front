import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from './AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useEffect, useState } from 'react';
import { FormRegex } from '@/utils/regex';
import FormButton from '../common/FormInput/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { ICONS } from '@/assets/icon/icons';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { userAPI } from '@/api/userAPI';
import { CommonRes, EmailCheckRes } from '@/types/api/response';

interface JoinForm {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

interface EmailCheck {
  canUse: boolean | null;
  message: string;
}

const JoinForm = () => {
  const navigate = useNavigate();
  const [emailCheck, setEmailCheck] = useState<EmailCheck>({
    canUse: null,
    message: '',
  });
  const [form, setForm] = useState<JoinForm>({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const handleFormChange = <T extends keyof JoinForm>(
    key: T,
    value: JoinForm[T],
  ) => {
    setForm((prev) => {
      const clone = { ...prev, [key]: value };
      return clone;
    });
  };

  useEffect(() => {
    setEmailCheck({
      canUse: null,
      message: '',
    });
  }, [form.email]);

  const handleSubmitForm = async () => {
    if (emailCheck.canUse && form.password === form.passwordCheck) {
      await userAPI
        .join({
          nickname: form.name,
          email: form.email,
          password: form.password,
        })
        .then((data: CommonRes) => {
          if (data.isSuccess) {
            alert('회원가입 되었습니다.');
            navigate('/account/login');
          } else {
            alert('회원가입을 실패했습니다.');
          }
        })
        .catch(() => alert('오류가 발생했습니다.'));
    }
  };

  const handleCheckDuplicateClick = async () => {
    await userAPI
      .emailCheck(form.email)
      .then((data: EmailCheckRes) => {
        if (data.result) {
          setEmailCheck({ canUse: true, message: '사용 가능한 이메일입니다' });
        } else {
          setEmailCheck({
            canUse: false,
            message: '이미 사용 중인 이메일입니다',
          });
        }
      })
      .catch(() => alert('오류가 발생했습니다.'));
  };

  return (
    <FormRoot
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm();
      }}>
      <AccountCardTitle>{'회원가입'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'name-input'}
          label={'Name'}
          value={form.name}
          onChange={(e) => handleFormChange('name', e.target.value)}
          placeholder='닉네임을 입력해주세요'
        />
        <EmailWrapper>
          <EmailContainer>
            <FormInput
              style={{ flex: 1 }}
              id={'email-input'}
              label={'Email'}
              value={form.email}
              onChange={(e) => handleFormChange('email', e.target.value)}
              regex={FormRegex.email}
              placeholder='이메일을 입력해주세요'
              errorMessage='이메일 형식이 유효하지 않습니다'
            />
            <button
              type='button'
              onClick={handleCheckDuplicateClick}
              className='duplicateBtn'>
              {'중복확인'}
            </button>
          </EmailContainer>
          <Message $isError={!emailCheck.canUse}>{emailCheck.message}</Message>
        </EmailWrapper>

        <FormInput
          id={'password-input'}
          label={'Password'}
          type='password'
          value={form.password}
          onChange={(e) => handleFormChange('password', e.target.value)}
          placeholder='비밀번호를 입력해주세요'
        />
        <FormInput
          id={'password-check-input'}
          label={'Password Check'}
          type='password'
          value={form.passwordCheck}
          onChange={(e) => handleFormChange('passwordCheck', e.target.value)}
          placeholder='비밀번호를 한 번 더 입력해주세요'
          isError={form.passwordCheck !== form.password}
          errorMessage='비밀번호가 일치하지 않습니다'
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton type='submit' text={'회원가입'} onClick={() => {}} />
        <GotoPage>
          <img src={ICONS.join} />
          <Link to={LOGIN_ROUTER_PATH.login}>{'로그인'}</Link>
        </GotoPage>
      </SubmitContainer>
    </FormRoot>
  );
};
export default JoinForm;

const EmailContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 10px;

  .duplicateBtn {
    height: 40px;
    padding: 12px;
    background-color: ${({ theme }) => theme.color_key};
    color: ${({ theme }) => theme.color_textWhite};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize_sm};

    &:hover {
      opacity: 0.9;
    }
  }
`;

const EmailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Message = styled.span<{ $isError: boolean }>`
  width: 100%;
  color: ${({ theme, $isError }) => ($isError ? theme.color_textRed : 'green')};
  font-size: ${({ theme }) => theme.fontSize_sm};
`;
