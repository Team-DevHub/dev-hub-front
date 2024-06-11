import styled from 'styled-components';
import {
  AccountCardTitle,
  FormRoot,
  GotoPage,
  InputContainer,
  SubmitContainer,
} from '../layouts/AccountLayout';
import FormInput from '../common/FormInput/FormInput';
import { useState } from 'react';
import { FormRegex } from '@/utils/regex';
import FormButton from '../common/FormInput/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { ICONS } from '../../constants/assets';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { userAPI } from '@/api/userAPI';
import { useForm } from 'react-hook-form';

interface JoinForm {
  nickname: string;
  email: string;
  password: string;
  passwordCheck: string;
}

interface Check {
  canUse: boolean | null;
  message: string;
}

const JoinForm = () => {
  const navigate = useNavigate();
  const [nameCheck, setNameCheck] = useState<Check>({
    canUse: null,
    message: '',
  });
  const [emailCheck, setEmailCheck] = useState<Check>({
    canUse: null,
    message: '',
  });

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
      await userAPI
        .join({
          nickname: data.nickname.trim(),
          email: data.email,
          password: data.password,
        })
        .then((data) => {
          if (data?.isSuccess) {
            alert('회원가입 되었습니다.');
            navigate('/account/login');
          }
        });
    }
  };

  const handleCheckEmail = async () => {
    await userAPI.emailCheck(watch('email')).then((data) => {
      if (data?.result) {
        setEmailCheck({ canUse: true, message: '사용 가능한 이메일입니다' });
      } else {
        setEmailCheck({
          canUse: false,
          message: '이미 사용 중인 이메일입니다',
        });
      }
    });
  };

  const handleCheckName = async () => {
    await userAPI.nameCheck(watch('nickname').trim()).then((data) => {
      if (data?.result) {
        setNameCheck({ canUse: true, message: '사용 가능한 닉네임입니다' });
      } else {
        setNameCheck({
          canUse: false,
          message: '이미 사용 중인 닉네임입니다',
        });
      }
    });
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
              placeholder='닉네임을 입력해주세요 (2~10자)'
              errorMessage={errors.nickname?.message}
              {...register('nickname', {
                onChange: () => {
                  setNameCheck({
                    canUse: null,
                    message: '',
                  });
                },
                minLength: {
                  value: 2,
                  message: '닉네임은 2~10자 이내로 만들어주세요',
                },
                maxLength: {
                  value: 10,
                  message: '닉네임은 2~10자 이내로 만들어주세요',
                },
              })}
            />
            <button
              type='button'
              onClick={handleCheckName}
              className='duplicateBtn'>
              {'중복확인'}
            </button>
          </InputWithButton>
          <Message $isError={!nameCheck.canUse}>{nameCheck.message}</Message>
        </InputWrapper>
        <InputWrapper>
          <InputWithButton>
            <FormInput
              style={{ flex: 1 }}
              id={'email-input'}
              label={'Email'}
              placeholder='이메일을 입력해주세요'
              errorMessage={errors.email?.message}
              {...register('email', {
                onChange: () => {
                  setEmailCheck({
                    canUse: null,
                    message: '',
                  });
                },
                pattern: {
                  value: FormRegex.email,
                  message: '이메일 형식이 유효하지 않습니다',
                },
              })}
            />
            <button
              type='button'
              onClick={handleCheckEmail}
              className='duplicateBtn'>
              {'중복확인'}
            </button>
          </InputWithButton>
          <Message $isError={!emailCheck.canUse}>{emailCheck.message}</Message>
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
            validate: (value) =>
              value === watch('password') || '비밀번호가 일치하지 않습니다',
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

const Message = styled.span<{ $isError: boolean }>`
  width: 100%;
  color: ${({ theme, $isError }) => ($isError ? theme.color_textRed : 'green')};
  font-size: ${({ theme }) => theme.fontSize_sm};
`;
