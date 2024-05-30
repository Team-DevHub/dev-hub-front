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
import Checkbox from '../common/FormInput/Checkbox';
import FormButton from '../common/FormInput/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { ICONS } from '@/assets/icon/icons';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { UserEmailKey, UserPasswordKey } from '@/constants/storage';
import { userAPI } from '@/api/userAPI';
import useStore from '@/store/store';

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useStore();

  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(UserEmailKey)) {
      setIsChecked(true);
      setForm({
        email: localStorage.getItem(UserEmailKey)!,
        password: localStorage.getItem(UserPasswordKey)!,
      });
    }
  }, []);

  const handleFormChange = <T extends keyof LoginForm>(
    key: T,
    value: LoginForm[T],
  ) => {
    setForm((prev) => {
      const clone = { ...prev, [key]: value };
      return clone;
    });
  };

  const handleSubmitForm = async () => {
    // 로그인 정보 저장
    if (isChecked) {
      localStorage.setItem(UserEmailKey, form.email);
      localStorage.setItem(UserPasswordKey, form.password);
    }

    await userAPI
      .login(form.email, form.password)
      .then((data) => {
        setUser(data.userId);
        setToken(data.accessToken);
      })
      .catch((err) => console.log(err));

    navigate('/', { replace: true });
  };

  return (
    <FormRoot
      onSubmit={() => {
        handleSubmitForm();
      }}>
      <AccountCardTitle>{'로그인'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'email-input'}
          label={'Email'}
          value={form.email}
          onChange={(e) => handleFormChange('email', e.target.value)}
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
        <FormButton text={'로그인'} onClick={handleSubmitForm} />
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
