import styled from 'styled-components';
import { useState } from 'react';
import { ICONS } from '@/assets/icon/icons';
import { Input } from '@/styles/component';

function SearchInput() {
  const [value, setValue] = useState<string>('');
  return (
    <Container>
      <h2>검색</h2>
      <Wrapper>
        <Input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ paddingRight: '40px' }}
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

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
