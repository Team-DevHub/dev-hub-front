import styled from "styled-components";
import Banner from "@/components/common/Banner";
import MyInfo from "@/components/myPage/MyInfo";
import MyLevel from "@/components/myPage/MyLevel";
import MyActivity from "@/components/myPage/MyActivity";

function MyPage(){
 return(
   <Container>
      <Banner hasBackBtn={true} title={"마이페이지"} />
       <Content>
        <MyInfo/>
        <MyLevel/>
        <MyActivity/>
       </Content>
    </Container>
 )
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;