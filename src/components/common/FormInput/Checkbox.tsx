import { ICONS } from '@/assets/icon/icons';
import styled from 'styled-components';

interface Props {
  id: string;
  checked: boolean;
  label: string;
  onClick: () => void;
}

const Checkbox = ({ id, checked, label, onClick }: Props) => {
  return (
    <RootContainer htmlFor={id} $isChecked={checked}>
      <img src={checked ? ICONS.checkbox.active : ICONS.checkbox.inactive} />
      <span className='label'>{label}</span>
      <input
        id={id}
        type='checkbox'
        onClick={onClick}
        checked={checked}
        hidden
        readOnly
      />
    </RootContainer>
  );
};
export default Checkbox;

const RootContainer = styled.label<{ $isChecked: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  .label {
    color: ${({ theme, $isChecked }) =>
      $isChecked ? theme.color.key : theme.color_textGray};
    font-size: 14px;
    font-weight: 500;
  }
`;
