import Banner from "@/components/common/Banner";
import Category from "@/components/common/Category";
import styled from "styled-components";

function HomePage() {
  return (
    <RootDiv>
      <Banner hasBackBtn={false} />
      <Category />
    </RootDiv>
  );
}

export default HomePage;

const RootDiv = styled.div`
  width: 100%;
`;
