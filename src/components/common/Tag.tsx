import styled from "styled-components";

interface TagProps {
  isClicked: boolean;
}

function Tag({ isClicked }: TagProps) {
  return <TagContainer $isClicked={isClicked}>Tag</TagContainer>;
}

export default Tag;

const TagContainer = styled.span<{ $isClicked: boolean }>`
  display: inline-block;
  padding: 4px 20px;
  border-radius: 12px;
  color: ${({ theme, $isClicked }) =>
    $isClicked ? theme.color.textWhite : theme.color.key};
  background-color: ${({ theme, $isClicked }) =>
    $isClicked ? theme.color.key : theme.color.bgWhite};
  border: 1px solid
    ${({ theme, $isClicked }) =>
      $isClicked ? theme.color.key : theme.color.borderGray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;

  cursor: pointer;
`;
