import React, { useState } from 'react';
import styled from 'styled-components';
import { categories } from '@/data/categories';
import Tag from './Tag';

interface CategoryProps {
  width?: string;
}

const Category: React.FC<CategoryProps> = ({ width = '650px' }) => {
  const [selected, setSelected] = useState<number>(categories[0].id);

  return (
    <Container width={width}>
      <h2>카테고리</h2>
      <TagContainer>
        {categories.map((data) => (
          <Tag
            key={data.id}
            content={data.name}
            isClicked={selected === data.id}
            onClick={() => setSelected(data.id)}
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
