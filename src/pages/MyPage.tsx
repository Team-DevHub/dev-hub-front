import styled from "styled-components";
import MyInfo from "@/components/myPage/MyInfo";
import Banner from "@/components/common/Banner";

function MyPage(){
 return(
   <Container>
    <Banner hasBackBtn={true} title={"마이페이지"} />
    <MyInfo/>
    </Container>
 )
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  gap: 3000px;
`;