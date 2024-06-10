import styled from 'styled-components';
import LinkIcon from '@/assets/icon/link-icon.svg?react';
import useStore from '@/store/store';

function Link() {
  const { selectedPost } = useStore();
  const links = selectedPost?.links.filter((link) => link.trim() !== '');

  if (!links || links.length === 0) {
    return null;
  }

  const addHttps = (link: string) => {
    // 절대 경로 변경
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return 'https://' + link;
    }
    return link;
  };

  return (
    <>
      {links.map((link, index) => (
        <LinkContainer key={index}>
          <StyledLinkIcon />
          <LinkContent
            href={addHttps(link)}
            target='_blank'
            rel='noopener noreferrer'>
            {link}
          </LinkContent>
        </LinkContainer>
      ))}
    </>
  );
}

export default Link;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 23px 20px;
  border-radius: 12px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.color_keyWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  margin-bottom: 15px;
`;

const StyledLinkIcon = styled(LinkIcon)`
  width: 20px;
  height: 20px;
`;

const LinkContent = styled.a`
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textBlack};
  font-weight: 500;
`;
