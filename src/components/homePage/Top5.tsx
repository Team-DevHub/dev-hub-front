import styled from "styled-components";
import TopUser from "./TopUser";

function Top5() {
  return (
    <Wrapper>
      <h3>지식 공유 Top5 수강생! 🔥</h3>
      <Container>
        <TopUser rank={1} userName="류지민" points={204} />
        <TopUser rank={2} userName="류지민" points={204} />
        <TopUser rank={3} userName="류지민" points={204} />
        <TopUser rank={4} userName="류지민" points={204} />
        <TopUser rank={5} userName="류지민" points={204} />
      </Container>
    </Wrapper>
  );
}

export default Top5;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.color_key};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 24px 30px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
`;
