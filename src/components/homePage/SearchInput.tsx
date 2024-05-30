import styled from 'styled-components';
import { useState } from 'react';
import { ICONS } from '@/assets/icon/icons';

function SearchInput() {
  const [value, setValue] = useState<string>('');
  return (
    <Container>
      <h2>검색</h2>
      <Wrapper>
        <StyledInput
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <SearchIcon src={ICONS.search} alt='search' />
      </Wrapper>
    </Container>
  );
}

export default SearchInput;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  padding-right: 40px;

  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_base};
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color_key};
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
