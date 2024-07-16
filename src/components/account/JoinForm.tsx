import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { FormRegex } from '@/utils/regex';
import FormButton from '../common/FormInput/FormButton';
import { Link } from 'react-router-dom';
import { ICONS } from '../../constants/assets';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import { useVerification } from '@/hooks/useVerification';

export interface JoinForm {
  nickname: string;
  email: string;
  password: string;
  passwordCheck: string;
}

const JoinForm = () => {
  const { join } = useAuth();
  const {
    emailCheck,
    nameCheck,
    checkEmail,
    checkName,
    resetEmailStatus,
    resetNameStatus,
  } = useVerification();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<JoinForm>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      passwordCheck: '',
    },
  });

  const isEmpty =
    !watch('nickname') ||
    !watch('email') ||
    !watch('password') ||
    !watch('passwordCheck');

  const handleSubmitForm = async (data: JoinForm) => {
    if (emailCheck.canUse && nameCheck.canUse) {
      join(data);
    }
  };

  return (
    <FormRoot onSubmit={handleSubmit(handleSubmitForm)}>
      <AccountCardTitle>{'회원가입'}</AccountCardTitle>
      <InputContainer>
        <InputWrapper>
          <InputWithButton>
            <FormInput
              style={{ flex: 1 }}
              id={'name-input'}
              label={'Name'}
              placeholder='닉네임을 입력해주세요 (2~6자)'
              successMessage={nameCheck.canUse ? nameCheck.message : ''}
              errorMessage={
                errors.nickname?.message ||
                (nameCheck.canUse ? '' : nameCheck.message)
              }
              {...register('nickname', {
                onChange: () => {
                  resetNameStatus();
                },
                minLength: {
                  value: 2,
                  message: '닉네임은 2~6자 이내로 만들어주세요',
                },
                maxLength: {
                  value: 6,
                  message: '닉네임은 2~6자 이내로 만들어주세요',
                },
              })}
            />
            <button
              type='button'
              onClick={() => checkName(watch('nickname'))}
              className='duplicateBtn'>
              {'중복확인'}
            </button>
          </InputWithButton>
        </InputWrapper>
        <InputWrapper>
          <InputWithButton>
            <FormInput
              style={{ flex: 1 }}
              id={'email-input'}
              label={'Email'}
              placeholder='이메일을 입력해주세요'
              successMessage={emailCheck.canUse ? emailCheck.message : ''}
              errorMessage={
                errors.email?.message ||
                (emailCheck.canUse ? '' : emailCheck.message)
              }
              {...register('email', {
                onChange: () => {
                  resetEmailStatus();
                },
                pattern: {
                  value: FormRegex.email,
                  message: '이메일 형식이 유효하지 않습니다',
                },
              })}
            />
            <button
              type='button'
              onClick={() => checkEmail(watch('email'))}
              className='duplicateBtn'>
              {'중복확인'}
            </button>
          </InputWithButton>
        </InputWrapper>

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
          id={'password-check-input'}
          label={'Password Check'}
          type='password'
          placeholder='비밀번호를 한 번 더 입력해주세요'
          errorMessage={errors.passwordCheck?.message}
          {...register('passwordCheck', {
            validate: (value) => {
              if (!value) return true;
              return (
                value === watch('password') || '비밀번호가 일치하지 않습니다'
              );
            },
          })}
        />
      </InputContainer>
      <SubmitContainer>
        <FormButton
          type='submit'
          disabled={isEmpty || !emailCheck.canUse || !nameCheck.canUse}
          text={'회원가입'}
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
export default JoinForm;

const InputWithButton = styled.div`
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

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
