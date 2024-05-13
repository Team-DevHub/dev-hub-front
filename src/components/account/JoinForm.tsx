import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from './AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useState } from 'react';
import { FormRegex } from '@/utils/regex';
import FormButton from '../common/FormInput/FormButton';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/routes/LoginRouter';

interface JoinForm {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

const JoinForm = () => {
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

  const handleSubmitForm = () => {};

  const handleCheckDuplicateClick = () => {};

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
        <EmailContainer>
          <FormInput
            style={{ flex: 1 }}
            id={'email-input'}
            label={'Email'}
            value={form.email}
            onChange={(e) => handleFormChange('email', e.target.value)}
            regex={FormRegex.email}
            placeholder='이메일을 입력해주세요'
          />
          <button
            type='button'
            onClick={handleCheckDuplicateClick}
            className='duplicateBtn'>
            {'중복확인'}
          </button>
        </EmailContainer>

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
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton
          type='submit'
          text={'회원가입'}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <GotoPage>
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
