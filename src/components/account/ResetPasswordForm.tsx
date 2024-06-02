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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ICONS } from '@/assets/icon/icons';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { userAPI } from '@/api/userAPI';

interface ResetPasswordForm {
  password: string;
  passwordCheck: string;
}

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const {
    state: { email },
  } = useLocation();
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

  const handleSubmitForm = async () => {
    await userAPI
      .resetPassword({ email: email, password: form.password })
      .then((res) => {
        if (res.isSuccess) {
          alert('비밀번호가 정상적으로 재설정되었습니다.');
          navigate(LOGIN_ROUTER_PATH.login);
        }
      });
  };

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
          placeholder='비밀번호를 입력해주세요'
        />
        <FormInput
          id={'passwordCheck-input'}
          label={'Password Check'}
          value={form.passwordCheck}
          type='password'
          onChange={(e) => handleFormChange('passwordCheck', e.target.value)}
          placeholder='비밀번호를 한 번 더 입력해주세요'
          isError={
            Boolean(form.password && form.passwordCheck) &&
            form.passwordCheck !== form.password
          }
          errorMessage='비밀번호가 일치하지 않습니다'
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton
          type='submit'
          disabled={
            !form.password ||
            !form.passwordCheck ||
            form.passwordCheck !== form.password
          }
          text={'비밀번호 재설정'}
          onClick={() => {}}
        />
        <GotoPage>
          <img src={ICONS.join} />
          <Link to={LOGIN_ROUTER_PATH.login}>{'로그인'}</Link>
        </GotoPage>
      </SubmitContainer>
    </FormRoot>
  );
};
export default ResetPasswordForm;
