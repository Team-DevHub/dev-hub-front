import styled from "styled-components";
import Profile from "./Profile";
import Button from "../common/Button";
import PencilIcon from "@/assets/icon/pencil-icon.svg";

function SideBar() {
  return (
    <Container>
      <Button
        size="medium"
        text="지식 공유하기"
        onClick={() => {}}
        icon={PencilIcon}
      />
      <Profile />
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 24px 0;

  position: sticky;
  top: 0;
  left: 0;
`;
