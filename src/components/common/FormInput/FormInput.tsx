import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value?: string;
  errorMessage?: string;
  successMessage?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      label,
      value,
      errorMessage,
      successMessage,
      placeholder,
      type = 'text',
      style,
      onChange,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <FormInputRoot style={style}>
        <LabelContainer
          $isError={Boolean(errorMessage)}
          $isSuccess={Boolean(successMessage)}>
          <label htmlFor={id} className='label'>
            {label}
          </label>
          <span className='message'>
            {errorMessage ? errorMessage : successMessage ? successMessage : ''}
          </span>
        </LabelContainer>
        <InputContainer
          $isError={Boolean(errorMessage)}
          $isSuccess={Boolean(successMessage)}>
          <input
            className='input'
            ref={ref}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
          />
        </InputContainer>
      </FormInputRoot>
    );
  },
);

export default FormInput;

const FormInputRoot = styled.div`
  max-width: 380px;
`;

const LabelContainer = styled.div<{ $isError: boolean; $isSuccess: boolean }>`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, $isError, $isSuccess }) =>
    $isError ? theme.color_textRed : $isSuccess ? 'green' : theme.color_key};

  .label {
    font-size: 14px;
    font-weight: 700;
  }

  .message {
    font-size: 11px;
    font-weight: 400;
  }
`;

const InputContainer = styled.div<{ $isError: boolean; $isSuccess: boolean }>`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid
    ${({ theme, $isError, $isSuccess }) =>
      $isError ? theme.color_textRed : $isSuccess ? 'green' : theme.color_key};

  .input {
    font-size: 14px;
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.color_textGray};
    }
  }
`;
