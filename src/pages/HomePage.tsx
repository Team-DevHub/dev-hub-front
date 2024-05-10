import Banner from "@/components/common/Banner";
import PostItem from "@/components/common/PostItem";
import Tag from "@/components/common/Tag";
import Filter from "@/components/homePage/Filter";
import styled from "styled-components";

function HomePage() {
  return (
    <RootDiv>
      <Banner hasBackBtn={false} />

      <TempWrapper>
        <PostItem />
        <div>
          <Tag isClicked={true} />
          <Tag isClicked={false} />
        </div>
        <Filter />
      </TempWrapper>
    </RootDiv>
  );
}

export default HomePage;

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const TempWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
