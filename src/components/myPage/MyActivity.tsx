import styled from "styled-components";



function MyActivity(){
  return (
    <Container>
      <Title>나의 활동</Title>
        <InnerContainer>
          
        </InnerContainer>
  </Container>
  )
}

export default MyActivity;


const Container = styled.div`
width: 267px;
height: 146px;
`

const InnerContainer = styled.div`
width: 267px;
height: 150px;
background-color: ${({ theme }) => theme.color.bgWhite};
border: 1px solid ${({ theme }) => theme.color.borderGray};
border-radius: 12px;
padding: 16px;
display: flex; 
align-items: center;
gap: 25px
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding-bottom: 13px;
`;
