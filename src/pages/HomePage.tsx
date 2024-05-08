import Banner from "@/components/common/Banner";
import PostItem from "@/components/common/PostItem";
import styled from "styled-components";

function HomePage() {
  return (
    <RootDiv>
      <Banner hasBackBtn={false} />
      <PostItem />
    </RootDiv>
  );
}

export default HomePage;

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
`;
