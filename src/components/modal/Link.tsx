import styled from 'styled-components';
import { ICONS } from '@/constants/assets';
import usePostStore from '@/store/postStore';

function Link() {
  const { selectedPost } = usePostStore();
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
          <img src={ICONS.link} alt='link' width={20} height={20} />
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
  height: 55px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.color_keyWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  margin-bottom: 15px;
`;

const LinkContent = styled.a`
  padding: 10px;
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textBlack};
  font-weight: 500;
`;
