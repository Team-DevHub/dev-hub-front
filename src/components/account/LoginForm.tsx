import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from './AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useContext, useState } from 'react';
import { FormRegex } from '@/utils/regex';
import Checkbox from '../common/FormInput/Checkbox';
import FormButton from '../common/FormInput/FormButton';
import { LoginContext } from '@/provider/LoginProvider';
import { UserKeyFromStorage } from '@/constants/storage';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/routes/LoginRouter';

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { handleUserChange } = useContext(LoginContext);

  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleFormChange = <T extends keyof LoginForm>(
    key: T,
    value: LoginForm[T],
  ) => {
    setForm((prev) => {
      const clone = { ...prev, [key]: value };
      return clone;
    });
  };

  const handleSubmitForm = () => {
    //로그인 api 요청 성공시

    const user = { name: '머쓱이' };

    handleUserChange(user);

    if (isChecked) {
      window.localStorage.setItem(UserKeyFromStorage, JSON.stringify(user));
    }

    window.location.replace('/');
  };

  return (
    <FormRoot
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm();
      }}>
      <AccountCardTitle>{'로그인'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'email-input'}
          label={'Email'}
          value={form.email}
          onChange={(e) => handleFormChange('email', e.target.value)}
          regex={FormRegex.email}
          placeholder='이메일을 입력해주세요'
        />
        <FormInput
          id={'password-input'}
          label={'Password'}
          type='password'
          value={form.password}
          onChange={(e) => handleFormChange('password', e.target.value)}
          placeholder='비밀번호를 입력해주세요'
        />
      </InputContainer>
      <SubmitContainer>
        <Checkbox
          id={'auto-login-checkbox'}
          checked={isChecked}
          label={'로그인 정보 저장'}
          onClick={() => setIsChecked((prev) => !prev)}
        />
        <FormButton type='submit' text={'로그인'} onClick={() => {}} />
        <GotoFindPassword>
          <Link to={LOGIN_ROUTER_PATH.password.find}>
            {'비밀번호를 잊으셨나요?'}
          </Link>
        </GotoFindPassword>
        <GotoPage>
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
