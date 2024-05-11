import Banner from "@/components/common/Banner";
import Category from "@/components/common/Category";
import Pagination from "@/components/common/Pagination";
import PostList from "@/components/homePage/PostList";
import SearchInput from "@/components/homePage/SearchInput";
import SideBar from "@/components/homePage/SideBar";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <Banner hasBackBtn={false} />
      <Container>
        <Content>
          <TopBar>
            <Category />
            <SearchInput />
          </TopBar>
          <PostList />
          <Pagination />
        </Content>
        <SideBar />
      </Container>
    </>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 1200px; // 임시
  display: flex;
  gap: 30px;
  padding: 40px 0;
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
