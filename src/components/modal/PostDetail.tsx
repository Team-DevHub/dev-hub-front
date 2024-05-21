import styled from 'styled-components';
import Lv5 from '@/assets/image/lv5.svg?react';
import Link from './Link';

function PostDetail() {
  return (
    <>
      <Container>
        <TopBar>
          <Tag>React</Tag>
          <UserInfo>
            <span>Lv.5</span>
            <h6>류지민</h6>
          </UserInfo>

          <StyledLv5 />
        </TopBar>
        <Post>
          <h2>모달 바깥 클릭 시 닫히도록 하는 React 커스텀 hook 코드 공유</h2>
          <span>
            모달 바깥 클릭 시 닫히도록 하는 React 커스텀 hook 만들었는데
            필요하신 분들은 이거 사용해보세요~~~! 모달 바깥 클릭 시 닫히도록
            하는 React 커스텀 hook 만들었는데 필요하신 분들은 이거
            사용해보세요~~~! 모달 바깥 클릭 시 닫히도록 하는 React 커스텀 hook
            만들었는데 필요하신 분들은 이거 사용해보세요~~~! 모달 바깥 클릭 시
            닫히도록 하는 React 커스텀 hook 만들었는데 필요하신 분들은 이거
            사용해보세요~~~!모달 바깥 클릭 시 닫히도록 하는 React 커스텀 hook
            만들었는데 필요하신 분들은 이거 사용해보세요~~~! 모달 바깥 클릭 시
            닫히도록 하는 React 커스텀 hook 만들었는데 필요하신 분들은 이거
            사용해보세요~~~!
          </span>
        </Post>
        <Link />
        <Date>2024.04.28</Date>
      </Container>
    </>
  );
}

export default PostDetail;

const Container = styled.div`
  width: 700px;
  padding: 30px 40px;
  overflow: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const TopBar = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: space-between;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color_textWhite};
  background-color: ${({ theme }) => theme.color_key};
  font-size: ${({ theme }) => theme.fontSize_sm};
  padding: 5px 14px;
  border-radius: 10px;
  font-weight: 500;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  flex-grow: 1;
  text-align: right;

  & span {
    font-size: ${({ theme }) => theme.fontSize_xs};
    color: ${({ theme }) => theme.color_textGray};
  }

  & h6 {
    font-size: ${({ theme }) => theme.fontSize_sm};
    font-weight: 500;
  }
`;

const StyledLv5 = styled(Lv5)`
  max-height: 100%;
  width: auto;
`;

const Post = styled.div`
  margin: 30px 0;
  & h2 {
    margin-bottom: 20px;
  }
  & span {
    font-size: ${({ theme }) => theme.fontSize_md};
    color: ${({ theme }) => theme.color_textBlack};
    line-height: 160%;
  }
`;

const Date = styled.span`
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize_sm};
  font-weight: 300;
  padding-top: 30px;
  margin-top: auto;
`;
