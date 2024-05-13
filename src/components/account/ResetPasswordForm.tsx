import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from './AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useState } from 'react';
import FormButton from '../common/FormInput/FormButton';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/routes/LoginRouter';
import { ICONS } from '@/assets/icon/icons';

interface ResetPasswordForm {
  password: string;
  passwordCheck: string;
}

const ResetPasswordForm = () => {
  const [form, setForm] = useState<ResetPasswordForm>({
    password: '',
    passwordCheck: '',
  });

  const handleFormChange = <T extends keyof ResetPasswordForm>(
    key: T,
    value: ResetPasswordForm[T],
  ) => {
    setForm((prev) => {
      const clone = { ...prev, [key]: value };
      return clone;
    });
  };

  const handleSubmitForm = () => {};

  return (
    <FormRoot
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm();
      }}>
      <AccountCardTitle>{'비밀번호 재설정'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'password-input'}
          label={'Password'}
          type='password'
          value={form.password}
          onChange={(e) => handleFormChange('password', e.target.value)}
          placeholder='회원님의 닉네임을 입력해주세요'
        />
        <FormInput
          id={'passwordCheck-input'}
          label={'Password Check'}
          value={form.passwordCheck}
          type='password'
          onChange={(e) => handleFormChange('passwordCheck', e.target.value)}
          placeholder='이메일을 입력해주세요'
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton type='submit' text={'비밀번호 재설정'} onClick={() => {}} />
        <GotoPage>
          <img src={ICONS.join} />
          <Link to={LOGIN_ROUTER_PATH.login}>{'로그인'}</Link>
        </GotoPage>
      </SubmitContainer>
    </FormRoot>
  );
};
export default ResetPasswordForm;
