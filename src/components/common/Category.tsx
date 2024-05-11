import { categories } from "@/data/categories";
import styled from "styled-components";
import Tag from "./Tag";
import { useState } from "react";

function Category() {
  const [selected, setSelected] = useState(categories[0].id);
  return (
    <Container>
      <Title>카테고리</Title>
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
}

export default Category;

const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize_xl};
  color: ${({ theme }) => theme.color_key};
  font-weight: 600;
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
