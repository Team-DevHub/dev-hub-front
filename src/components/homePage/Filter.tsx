import styled from "styled-components";
import FilterIcon from "@/assets/icon/filter-arrow.svg?react";
import { useState } from "react";

function Filter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("최신 순");

  return (
    <CustomSelect onClick={() => setIsOpen((prev) => !prev)}>
      <Content>{selected}</Content>
      <FilterIcon />

      {isOpen && (
        <OptionBox>
          <Option onClick={() => setSelected("최신 순")}>최신 순</Option>
          <Option onClick={() => setSelected("오래된 순")}>오래된 순</Option>
          <Option onClick={() => setSelected("댓글 많은 순")}>
            댓글 많은 순
          </Option>
        </OptionBox>
      )}
    </CustomSelect>
  );
}

export default Filter;

const CustomSelect = styled.div`
  width: 120px;
  height: 30px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  position: relative;
  cursor: pointer;
`;

const Content = styled.span`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color_textBlack};
  font-weight: 500;
`;

const OptionBox = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 32px;
  left: 0px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 8px;
  overflow-x: hidden;
`;

const Option = styled.div`
  width: 100%;
  padding: 8px 14px;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color_textBlack};
  transition: all 0.15s ease-in;

  &:hover {
    background-color: #f0f0f0;
  }
`;
