import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value?: string;
  errorMessage?: string;
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
        <LabelContainer $isError={Boolean(errorMessage)}>
          <label htmlFor={id} className='label'>
            {label}
          </label>
          <span className='error-message'>{errorMessage}</span>
        </LabelContainer>
        <InputContainer $isError={Boolean(errorMessage)}>
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

const LabelContainer = styled.div<{ $isError: boolean }>`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, $isError }) =>
    $isError ? theme.color_textRed : theme.color_key};

  .label {
    font-size: 14px;
    font-weight: 700;
  }

  .error-message {
    font-size: 10px;
    font-weight: 400;
  }
`;

const InputContainer = styled.div<{ $isError: boolean }>`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.color_textRed : theme.color_key};

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
