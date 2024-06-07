import { userAPI } from '@/api/userAPI';
import Banner from '@/components/common/Banner';
import Category from '@/components/common/Category';
import Pagination from '@/components/common/Pagination';
import PostList from '@/components/homePage/PostList';
import SearchInput from '@/components/homePage/SearchInput';
import SideBar from '@/components/homePage/SideBar';
import PostEmpty from '@/components/posts/PostEmpty';
import { usePosts } from '@/hooks/usePosts';
import useStore from '@/store/store';
import { useEffect } from 'react';
import styled from 'styled-components';

function HomePage() {
  const { posts, pagination, isEmpty } = usePosts();
  const { setUserInfo } = useStore();

  useEffect(() => {
    const getUser = async () => {
      await userAPI.getUserInfo().then((res) => {
        setUserInfo(res!.result);
      });
    };
    getUser();
  }, []);

  return (
    <>
      <Banner hasBackBtn={false} />
      <Container>
        <Content>
          <TopBar>
            <Category width='650px' mode='filter' />
            <SearchInput />
          </TopBar>
          {!isEmpty && (
            <PostList totalPosts={pagination.totalPosts} posts={posts} />
          )}
          {isEmpty && <PostEmpty />}
          {!isEmpty && (
            <Pagination
              totalPosts={pagination.totalPosts}
              currentPage={pagination.currentPage}
            />
          )}
        </Content>
        <SideBar />
      </Container>
    </>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 40px 0 100px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
