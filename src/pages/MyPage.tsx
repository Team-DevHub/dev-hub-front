import styled from 'styled-components';
import MyInfo from '@/components/myPage/MyInfo';
import MyLevel from '@/components/myPage/MyLevel';
import MyActivity from '@/components/myPage/MyActivity';
import MyPostList from '@/components/myPage/MyPostLIst';
import BannerWithTitle from '@/components/common/Banner/BannerWithTitle';
import MyScrapList from '@/components/myPage/MyScrapList';
import { Tab, Tabs } from '@/components/common/Tabs';

function MyPage() {
  return (
    <Container>
      <BannerWithTitle title={'마이페이지'} />
      <Content>
        <MyInfo />
        <MyLevel />
        <MyActivity />
      </Content>
      <Tabs>
        <Tab title='나의 지식'>
          <MyPostList />
        </Tab>
        <Tab title='저장한 지식'>
          <MyScrapList />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0 40px 0;
`;
