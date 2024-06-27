import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useState } from 'react';
import Checkbox from '../common/FormInput/Checkbox';
import FormButton from '../common/FormInput/FormButton';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { UserEmailKey, UserPasswordKey } from '@/constants/storage';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';

export interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { logIn, loginError } = useAuth();
  const [isChecked, setIsChecked] = useState(false);

  const { register, watch, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      email: localStorage.getItem(UserEmailKey) || '',
      password: localStorage.getItem(UserPasswordKey) || '',
    },
  });

  const handleSubmitForm = async (formData: LoginForm) => {
    logIn(formData, isChecked);
  };

  return (
    <FormRoot onSubmit={handleSubmit(handleSubmitForm)}>
      <AccountCardTitle>{'로그인'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'email-input'}
          label={'Email'}
          placeholder='이메일을 입력해주세요'
          {...register('email')}
        />
        <FormInput
          id={'password-input'}
          label={'Password'}
          type='password'
          placeholder='비밀번호를 입력해주세요'
          {...register('password')}
        />
      </InputContainer>
      <SubmitContainer>
        <Checkbox
          id={'auto-login-checkbox'}
          checked={isChecked}
          label={'로그인 정보 저장'}
          onClick={() => setIsChecked((prev) => !prev)}
        />
        <ButtonWrapper>
          <ErrorMessage>{loginError}</ErrorMessage>
          <FormButton
            type='submit'
            text={'로그인'}
            disabled={!watch('email') || !watch('password')}
          />
        </ButtonWrapper>
        <LinkWrapper>
          <Link to={LOGIN_ROUTER_PATH.join}>
            <span>회원가입</span>
          </Link>
          <Link to={LOGIN_ROUTER_PATH.password.find}>
            <span>비밀번호 찾기</span>
          </Link>
        </LinkWrapper>
      </SubmitContainer>
    </FormRoot>
  );
};
export default LoginForm;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  hr {
    height: 1px;
    color: black;
    background-color: black;
  }
`;

const ErrorMessage = styled.span`
  height: 14px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color_textRed};
  font-size: ${({ theme }) => theme.fontSize_sm};
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 10px;
  }

  a {
    color: ${({ theme }) => theme.color_key};
    font-size: ${({ theme }) => theme.fontSize_base};
    text-decoration: none;
    font-weight: 500;
  }

  a::after {
    content: '|';
  }

  a:last-child::after {
    content: '';
  }
`;
