import Category from '@/components/common/Category';
import Pagination from '@/components/common/Pagination';
import PostList from '@/components/homePage/PostList';
import SearchInput from '@/components/homePage/SearchInput';
import SideBar from '@/components/homePage/SideBar';
import { useProfile } from '@/hooks/useProfile';
import PostEmpty from '@/components/posts/PostEmpty';
import { usePosts } from '@/hooks/usePosts';
import styled from 'styled-components';
import BannerSlider from '@/components/common/Banner/BannerSlider';

function HomePage() {
  const { posts, pagination, isEmpty } = usePosts();

  useProfile();

  return (
    <>
      <BannerSlider />
      <Container>
        <Content>
          <Wrapper>
            <TopBar>
              <Category width='650px' mode='filter' />
              <SearchInput />
            </TopBar>
            {!isEmpty && (
              <PostList totalPosts={pagination.totalPosts} posts={posts} />
            )}
            {isEmpty && <PostEmpty />}
          </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
