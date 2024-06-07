import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import FormButton from '../common/FormInput/FormButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ICONS } from '@/assets/icon/icons';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { userAPI } from '@/api/userAPI';
import { useForm } from 'react-hook-form';
import { FormRegex } from '@/utils/regex';

interface ResetPasswordForm {
  password: string;
  passwordCheck: string;
}

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const {
    state: { email },
  } = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ResetPasswordForm>({
    mode: 'onChange',
    defaultValues: {
      password: '',
      passwordCheck: '',
    },
  });

  const handleSubmitForm = async (data: ResetPasswordForm) => {
    await userAPI
      .resetPassword({ email: email, password: data.password })
      .then((res) => {
        if (res.isSuccess) {
          alert('비밀번호가 정상적으로 재설정되었습니다.');
          navigate(LOGIN_ROUTER_PATH.login);
        }
      });
  };

  return (
    <FormRoot onSubmit={handleSubmit(handleSubmitForm)}>
      <AccountCardTitle>{'비밀번호 재설정'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'password-input'}
          label={'Password'}
          type='password'
          placeholder='8~15자 이내 영문 대소문자, 숫자 포함'
          errorMessage={errors.password?.message}
          {...register('password', {
            pattern: {
              value: FormRegex.password,
              message: '8~15자 이내로 영문 대소문자, 숫자를 조합하세요',
            },
          })}
        />
        <FormInput
          id={'passwordCheck-input'}
          label={'Password Check'}
          type='password'
          placeholder='비밀번호를 한 번 더 입력해주세요'
          errorMessage={errors.passwordCheck?.message}
          {...register('passwordCheck', {
            validate: (value) =>
              value === watch('password') || '비밀번호가 일치하지 않습니다',
          })}
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton
          type='submit'
          disabled={
            !watch('password') ||
            !watch('passwordCheck') ||
            Boolean(errors.passwordCheck)
          }
          text={'비밀번호 재설정'}
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
