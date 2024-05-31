import { ChangeEventHandler } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface Props {
  id: string;
  label: string;
  value: string;
  regex?: RegExp;
  errorMessage?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  style?: CSSProperties;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
}

const FormInput = ({
  id,
  label,
  value,
  regex,
  errorMessage,
  placeholder,
  type = 'text',
  style,
  onChange,
  isError = regex ? value.length > 0 && !regex.test(value) : false,
}: Props) => {
  return (
    <FormInputRoot style={style}>
      <LabelContainer $isError={isError}>
        <label htmlFor={id} className='label'>
          {label}
        </label>
        <span className='error-message'>{isError && errorMessage}</span>
      </LabelContainer>
      <InputContainer $isError={isError}>
        <input
          className='input'
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputContainer>
    </FormInputRoot>
  );
};
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
