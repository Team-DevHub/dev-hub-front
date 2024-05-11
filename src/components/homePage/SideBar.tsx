import styled from "styled-components";
import Profile from "./Profile";

function SideBar() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  width: 220px;
  display: flex;
`;
