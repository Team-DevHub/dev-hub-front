import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import styled from 'styled-components';
import { ICONS } from '../../constants/assets';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/styles/component';

interface SearchInputProps {
  onSearch?: (value: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>(searchParams.get('search') || '');

  useEffect(() => {
    const currentSearch = searchParams.get('search') || '';
    setValue(currentSearch);
  }, [searchParams]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    searchParams.set('search', value);
    searchParams.delete('page');
    searchParams.delete('category_id');
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
        <Input
          type='text'
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ paddingRight: '40px' }}
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

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
