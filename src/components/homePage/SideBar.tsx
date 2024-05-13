import styled from 'styled-components';
import Profile from './Profile';
import Button from '../common/Button';
import Top5 from './Top5';
import { ICONS } from '@/assets/icon/icons';

function SideBar() {
  return (
    <Container>
      <Button
        size='medium'
        text='지식 공유하기'
        onClick={() => {}}
        icon={ICONS.pencil}
      />
      <Profile />
      <Top5 />
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  width: 220px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 30px 0;

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;
