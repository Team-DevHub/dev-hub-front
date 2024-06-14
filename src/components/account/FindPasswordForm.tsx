import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import FormButton from '../common/FormInput/FormButton';
import { Link } from 'react-router-dom';
import { ICONS } from '../../constants/assets';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { useForm } from 'react-hook-form';
import { FormRegex } from '@/utils/regex';
import { usePassword } from '@/hooks/usePassword';

export interface FindPasswordForm {
  nickname: string;
  email: string;
}

const FindPasswordForm = () => {
  const { resetRequest } = usePassword();
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

  const handleSubmitForm = (data: FindPasswordForm) => {
    resetRequest(data);
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
