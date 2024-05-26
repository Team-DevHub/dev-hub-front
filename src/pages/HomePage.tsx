import Banner from '@/components/common/Banner';
import Category from '@/components/common/Category';
import Pagination from '@/components/common/Pagination';
import PostList from '@/components/homePage/PostList';
import SearchInput from '@/components/homePage/SearchInput';
import SideBar from '@/components/homePage/SideBar';
import { Post, postDummy } from '@/data/postDummy';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function HomePage() {
  const page = useSearchParams()[0].get('page');
  const [posts, setPosts] = useState<Post[]>([]);
  const pageNum = page ? +page : 1;

  useEffect(() => {
    setPosts(postDummy.slice(21 * (pageNum - 1), 21 * pageNum)); // 임시 (서버 연동 부분)
    window.scroll(0, 0);
  }, [page]);

  return (
    <>
      <Banner hasBackBtn={false} />
      <Container>
        <Content>
          <TopBar>
            <Category width='650px' />
            <SearchInput />
          </TopBar>
          <PostList totalPosts={postDummy.length} postData={posts} />
          <Pagination totalPosts={postDummy.length} currentPage={pageNum} />
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
