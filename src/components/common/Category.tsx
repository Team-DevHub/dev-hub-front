import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { categories } from '@/data/categories';
import Tag from './Tag';
import { useSearchParams } from 'react-router-dom';

interface CategoryProps {
  width?: string;
  onCategorySelect?: (id: number) => void;
  mode: 'filter' | 'select';
  initialSelected?: number;
}

const Category: React.FC<CategoryProps> = ({
  width = '650px',
  onCategorySelect,
  mode,
  initialSelected = 0,
}) => {
  const [selected, setSelected] = useState<number>(initialSelected);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSelected(initialSelected);
  }, [initialSelected]);

  const handleSelect = (id: number) => {
    if (mode === 'filter') {
      const newSearchParams = new URLSearchParams(searchParams);
      if (id === 0) {
        newSearchParams.delete('category_id');
        newSearchParams.delete('page');
        setSelected(id);
      } else {
        newSearchParams.set('category_id', id.toString());
        newSearchParams.delete('page');
      }
      setSearchParams(newSearchParams);
    } else if (mode === 'select' && onCategorySelect) {
      onCategorySelect(id);
    }
    setSelected(id);
  };

  // filter mode에서만 전체 카테고리 추가
  const categoriesWithAll =
    mode === 'filter' ? [{ id: 0, name: '전체' }, ...categories] : categories;

  return (
    <Container width={width}>
      <h2>카테고리</h2>
      <TagContainer>
        {categoriesWithAll.map((data) => (
          <Tag
            key={data.id}
            content={data.name}
            isClicked={selected === data.id}
            onClick={() => handleSelect(data.id)}
          />
        ))}
      </TagContainer>
    </Container>
  );
};

export default Category;

interface ContainerProps {
  width: string;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
