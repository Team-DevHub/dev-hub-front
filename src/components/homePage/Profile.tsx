import styled from "styled-components";
import Lv5 from "@/assets/image/lv5.svg?react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import HouseIcon from "@/assets/icon/house-icon.svg";

function Profile() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h3>내 프로필</h3>
      <Container>
        <Lv5 />
        <UserInfo>
          <h4>류지민</h4>
          <span>Lv.5 개발자에게 밤샘은 기본</span>
        </UserInfo>
        <ActivityInfo>
          <Activity>
            <h5>19개</h5>
            <span>공유한 지식</span>
          </Activity>
          <Activity>
            <h5>204점</h5>
            <span>보유 포인트</span>
          </Activity>
        </ActivityInfo>
        <Button
          size="small"
          text="마이페이지"
          onClick={() => navigate("/my-page")}
          icon={HouseIcon}
        />
      </Container>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize_md};
    color: ${({ theme }) => theme.color_key};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  & h4 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize_lg};
    color: ${({ theme }) => theme.color_key};
  }

  & span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_textGray};
    letter-spacing: 0.3px;
  }
`;

const ActivityInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  & h5 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize_md};
    color: ${({ theme }) => theme.color_key};
  }

  & span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_textGray};
    letter-spacing: 0.3px;
  }
`;
