import styled from 'styled-components';

interface Props {
  disabled?: boolean;
  text: string;
  onClick: () => void;
}

const FormButton = ({ disabled = false, text, onClick }: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};
export default FormButton;

const Button = styled.button`
  width: 100%;
  max-width: 380px;
  border-radius: 10px;
  padding: 12px 0;
  font-size: 18px;
  font-weight: 700;
  outline: 0;
  border: 0;

  ${({ disabled, theme }) => {
    if (!disabled)
      return {
        backgroundColor: theme.color.key,
        color: theme.color.textWhite,
      };

    if (disabled)
      return {
        backgroundColor: '#CFD3D8',
        color: theme.color.textBlack,
        cursor: 'default',
      };
  }}

  &:hover:not(:disabled) {
    opacity: 0.95;
  }
`;
