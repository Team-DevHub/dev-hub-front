import styled from "styled-components";
import Lv5 from "@/assets/image/lv5.svg?react";
import InfoIcon from "@/assets/icon/info-icon.svg?react"


function MyLevel(){
  return (
    <Wrapper>
      <Title>나의 레벨</Title>
        <Container>
        <InfoIconWrapper>
          <InfoIcon />
        </InfoIconWrapper>
          <Content>
        
          <Lv5/>
          <UserLevel>
          <h2>Lv.5 </h2>
          <span>개발자에게 밤샘은 기본</span>
          </UserLevel>
          </Content>
          
        </Container>
  </Wrapper>
  )
}

export default MyLevel;


const Wrapper = styled.div`
width: 365px;
height: 146px;
`

const Container = styled.div`
width: 365px;
height: 150px;
background-color: ${({ theme }) => theme.color.bgWhite};
border: 1px solid ${({ theme }) => theme.color.borderGray};
border-radius: 12px;
padding: 16px;
display: flex; 
justify-content: center;
align-items: center;
position: relative; 
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding-bottom: 13px;
`;

const Content = styled.div`
 display: flex;
 align-items: center;
 gap: 25px
`


const UserLevel = styled.div`

align-items: center;

& h2{
  font-weight: 700;
  padding-bottom: 10px;
}

`


const InfoIconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;