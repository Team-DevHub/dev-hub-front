import styled from 'styled-components';
import FilterIcon from '@/assets/icon/filter-arrow.svg?react';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';

function Filter() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('최신 순');

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <CustomSelect $isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <Content>{selected}</Content>
      <FilterIcon />

      <AnimatePresence>
        {isOpen && (
          <OptionBox
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}>
            <Option onClick={() => setSelected('최신 순')}>최신 순</Option>
            <Option onClick={() => setSelected('오래된 순')}>오래된 순</Option>
            <Option onClick={() => setSelected('댓글 많은 순')}>
              댓글 많은 순
            </Option>
          </OptionBox>
        )}
      </AnimatePresence>
    </CustomSelect>
  );
}

export default Filter;

const CustomSelect = styled(motion.div)<{ $isOpen: boolean }>`
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

  box-shadow: ${({ theme, $isOpen }) => ($isOpen ? theme.shadow : 'none')};
`;

const Content = styled.span`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textBlack};
  font-weight: 500;
`;

const OptionBox = styled(motion.div)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 32px;
  left: 0px;
  z-index: 10;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 8px;
  overflow-x: hidden;
`;

const Option = styled.div`
  width: 100%;
  padding: 8px 14px;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textBlack};
  transition: all 0.15s ease-in;

  &:hover {
    background-color: #f0f0f0;
  }
`;
