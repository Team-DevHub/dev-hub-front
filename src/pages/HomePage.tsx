import Banner from "@/components/common/Banner";
import styled from "styled-components";

function HomePage() {
  return (
    <RootDiv>
      <Banner hasBackBtn={true} />
    </RootDiv>
  );
}

export default HomePage;

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
`;
