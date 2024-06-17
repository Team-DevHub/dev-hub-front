import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useState } from 'react';
import Checkbox from '../common/FormInput/Checkbox';
import FormButton from '../common/FormInput/FormButton';
import { Link } from 'react-router-dom';
import { ICONS } from '../../constants/assets';
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
        <GotoFindPassword>
          <Link to={LOGIN_ROUTER_PATH.password.find}>
            {'비밀번호를 잊으셨나요?'}
          </Link>
        </GotoFindPassword>
        <GotoPage>
          <img src={ICONS.join} />
          <Link to={LOGIN_ROUTER_PATH.join}>{'회원가입'}</Link>
        </GotoPage>
      </SubmitContainer>
    </FormRoot>
  );
};
export default LoginForm;

const GotoFindPassword = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.color_textGray};
    font-size: ${({ theme }) => theme.fontSize_sm};
    text-decoration: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ErrorMessage = styled.span`
  height: 14px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color_textRed};
  font-size: ${({ theme }) => theme.fontSize_sm};
`;
