import { useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { ICONS } from '@/assets/icon/icons';
import { useSearchParams } from 'react-router-dom';

interface SearchInputProps {
  onSearch?: (value: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>(searchParams.get('search') || '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    searchParams.set('search', value);
    searchParams.delete('page');
    setSearchParams(searchParams);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <h2>검색</h2>
      <Wrapper>
        <StyledInput
          type='text'
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon src={ICONS.search} alt='search' onClick={handleSearch} />
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
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
