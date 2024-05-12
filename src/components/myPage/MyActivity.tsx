import styled from "styled-components";
import BookIcon from "@/assets/icon/myactivity-book-icon.svg?react"
import PointIcon from "@/assets/icon/myactivity-point-icon.svg?react"

function MyActivity(){
  return (
    <Wrapper>
      <Title>나의 활동</Title>
        <Container>
        <ActivityInfo>
            <BookIcon/>
              <Activity>
                <span>내가 공유한 지식</span>
                <h4>19개</h4>
              </Activity>
        </ActivityInfo>
        <ActivityInfo>
            <PointIcon/>
              <Activity>
                <span>보유 포인트</span>
                <h4>204점</h4>
              </Activity>
      </ActivityInfo>
        </Container>
  </Wrapper>
  )
}

export default MyActivity;


const Wrapper = styled.div`
  width: 267px;
  height: 146px;
  `;

const Container = styled.div`
  width: 267px;
  height: 150px;
  background-color: ${({ theme }) => theme.color.bgWhite};
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 12px;
  padding: 35px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px
  `;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding-bottom: 13px;
`;

const ActivityInfo = styled.div`
  width :100%;
  display: flex;
  align-items: center; 
  gap: 20px;
  `;

const Activity = styled.div`
  flex-direction: column;
  
  & h4{
    font-weight: 700;
    margin-top: 6px;
  }

  & span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.color.textGray};
  }
`;