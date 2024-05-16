import styled from 'styled-components';

interface Props {
  disabled?: boolean;
  text: string;
  type?: 'button' | 'reset' | 'submit';
  onClick: () => void;
  fontSize?: string;
}

const FormButton = ({
  disabled = false,
  text,
  type = 'button',
  fontSize = '18px',
  onClick,
}: Props) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      $fontSize={fontSize}
      disabled={disabled}>
      {text}
    </Button>
  );
};
export default FormButton;

const Button = styled.button<{ $fontSize: string }>`
  width: 100%;
  max-width: 380px;
  border-radius: 10px;
  padding: 12px 0;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  outline: 0;
  border: 0;

  ${({ disabled, theme }) => {
    if (!disabled)
      return {
        backgroundColor: theme.color_key,
        color: theme.color_textWhite,
      };

    if (disabled)
      return {
        backgroundColor: '#CFD3D8',
        color: theme.colortextBlack,
        cursor: 'default',
      };
  }}

  &:hover:not(:disabled) {
    opacity: 0.95;
  }
`;
