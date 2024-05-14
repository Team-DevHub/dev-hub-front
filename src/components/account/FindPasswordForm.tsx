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
import { Link, useNavigate } from 'react-router-dom';
import { ICONS } from '@/assets/icon/icons';
import { LOGIN_ROUTER_PATH } from '@/constants/path';

interface FindPasswordForm {
  name: string;
  email: string;
}

const FindPasswordForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FindPasswordForm>({
    name: '',
    email: '',
  });

  const handleFormChange = <T extends keyof FindPasswordForm>(
    key: T,
    value: FindPasswordForm[T],
  ) => {
    setForm((prev) => {
      const clone = { ...prev, [key]: value };
      return clone;
    });
  };

  const handleSubmitForm = () => {
    navigate(LOGIN_ROUTER_PATH.password.reset);
  };

  return (
    <FormRoot
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm();
      }}>
      <AccountCardTitle>{'비밀번호 찾기'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'name-input'}
          label={'Name'}
          value={form.name}
          onChange={(e) => handleFormChange('name', e.target.value)}
          placeholder='회원님의 닉네임을 입력해주세요'
        />
        <FormInput
          id={'email-input'}
          label={'Email'}
          value={form.email}
          regex={FormRegex.email}
          onChange={(e) => handleFormChange('email', e.target.value)}
          placeholder='이메일을 입력해주세요'
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton type='submit' text={'비밀번호 찾기'} onClick={() => {}} />
        <GotoPage>
          <img src={ICONS.join} />
          <Link to={LOGIN_ROUTER_PATH.login}>{'로그인'}</Link>
        </GotoPage>
      </SubmitContainer>
    </FormRoot>
  );
};
export default FindPasswordForm;
