import styled from "styled-components";

interface TagProps {
  content: string;
  isClicked: boolean;
  onClick: () => void;
}

function Tag({ content, isClicked, onClick }: TagProps) {
  return (
    <TagContainer onClick={onClick} $isClicked={isClicked}>
      {content}
    </TagContainer>
  );
}

export default Tag;

const TagContainer = styled.span<{ $isClicked: boolean }>`
  display: inline-block;
  padding: 6px 20px;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;

  ${({ theme, $isClicked }) => {
    if ($isClicked) {
      return {
        color: theme.color.textWhite,
        backgroundColor: theme.color.key,
        border: `1px solid ${theme.color.key}`,
      };
    } else {
      return {
        color: theme.color.key,
        backgroundColor: theme.color.bgWhite,
        border: `1px solid ${theme.color.borderGray}`,
      };
    }
  }}
`;
