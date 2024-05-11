import Banner from "@/components/common/Banner";
import Category from "@/components/common/Category";
import SideBar from "@/components/homePage/SideBar";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <Banner hasBackBtn={false} />
      <Container>
        <Content>
          <Category />
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
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
