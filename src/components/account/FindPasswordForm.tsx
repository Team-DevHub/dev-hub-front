import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import FormButton from '../common/FormInput/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { ICONS } from '../../constants/assets';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { userAPI } from '@/api/userAPI';
import { useForm } from 'react-hook-form';
import { FormRegex } from '@/utils/regex';

interface FindPasswordForm {
  nickname: string;
  email: string;
}

const FindPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FindPasswordForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
    },
  });

  const handleSubmitForm = async (data: FindPasswordForm) => {
    await userAPI.requestReset(data).then((res) => {
      if (res?.isSuccess) {
        navigate(LOGIN_ROUTER_PATH.password.reset, {
          state: { email: data.email },
        });
      } else {
        window.alert('존재하지 않는 유저입니다.');
      }
    });
  };

  return (
    <FormRoot onSubmit={handleSubmit(handleSubmitForm)}>
      <AccountCardTitle>{'비밀번호 찾기'}</AccountCardTitle>
      <InputContainer>
        <FormInput
          id={'name-input'}
          label={'Name'}
          placeholder='회원님의 닉네임을 입력해주세요'
          {...register('nickname')}
        />
        <FormInput
          id={'email-input'}
          label={'Email'}
          placeholder='이메일을 입력해주세요'
          errorMessage={errors.email?.message}
          {...register('email', {
            pattern: {
              value: FormRegex.email,
              message: '이메일 형식이 유효하지 않습니다',
            },
          })}
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton
          type='submit'
          disabled={
            !watch('email') || !watch('nickname') || Boolean(errors.email)
          }
          text={'비밀번호 찾기'}
        />
        <GotoPage>
          <img src={ICONS.join} />
          <Link to={LOGIN_ROUTER_PATH.login}>{'로그인'}</Link>
        </GotoPage>
      </SubmitContainer>
    </FormRoot>
  );
};
export default FindPasswordForm;
