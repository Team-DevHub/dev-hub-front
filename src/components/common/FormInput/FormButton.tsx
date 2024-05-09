import styled from 'styled-components';

interface Props {
  type?: 'default' | 'gray';
  text: string;
  onClick: () => void;
}

const FormButton = ({ type = 'default', text, onClick }: Props) => {
  return (
    <Button onClick={onClick} $type={type}>
      {text}
    </Button>
  );
};
export default FormButton;

const Button = styled.button<{
  $type: Props['type'];
}>`
  width: 100%;
  max-width: 380px;
  border-radius: 10px;
  padding: 12px 0;
  font-size: 18px;
  font-weight: 700;
  outline: 0;
  border: 0;

  ${({ $type, theme }) => {
    if ($type === 'default')
      return {
        backgroundColor: theme.color.key,
        color: theme.color.textWhite,
      };

    if ($type === 'gray')
      return {
        backgroundColor: '#CFD3D8',
        color: theme.color.textBlack,
      };
  }}

  &:hover {
    opacity: 0.95;
    cursor: pointer;
  }
`;
