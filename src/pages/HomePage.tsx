import Banner from "@/components/common/Banner";
import PostItem from "@/components/common/PostItem";
import Tag from "@/components/common/Tag";
import styled from "styled-components";

function HomePage() {
  return (
    <RootDiv>
      <Banner hasBackBtn={false} />
      <PostItem />
      <Tag isClicked={true} />
      <Tag isClicked={false} />
    </RootDiv>
  );
}

export default HomePage;

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
`;
