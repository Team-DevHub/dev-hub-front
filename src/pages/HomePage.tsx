import Banner from "@/components/common/Banner";
import Category from "@/components/common/Category";
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
  gap: 50px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
`;
