import { ICONS } from '@/constants/assets';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface LinkInputProps {
  links: string[];
  onLinksChange: (links: string[]) => void;
}

function LinkInput({ links, onLinksChange }: LinkInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (index: number, newValue: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = newValue;
    onLinksChange(updatedLinks);

    if (newValue.trim() !== '' && index === links.length - 1) {
      onLinksChange([...updatedLinks, '']);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      onLinksChange(
        links.filter((_, idx) => idx === 0 || links[idx].trim() !== ''),
      );
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [links]);

  return (
    <Container ref={containerRef}>
      <h2>링크</h2>
      {links.map((link, index) => (
        <Wrapper key={index}>
          <StyledLinkIcon src={ICONS.link} />
          <StyledInput
            type='text'
            value={link}
            placeholder='링크를 입력하세요.'
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </Wrapper>
      ))}
    </Container>
  );
}

export default LinkInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 45px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_md};
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
`;

const StyledLinkIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
