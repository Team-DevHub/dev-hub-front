import styled from 'styled-components';
import Category from '@/components/common/Category';
import TitleInput from '@/components/posting/TitleInput';
import LinkInput from '@/components/posting/LinkInput';
import ContentInput from '@/components/posting/ContentInput';
import Banner from '@/components/common/Banner';
// import FormButton from '@/components/common/FormInput/FormButton';
import Button from '@/components/common/Button';
import { ICONS } from '@/assets/icon/icons';

function PostingPage() {
  return (
    <Container>
      <Banner hasBackBtn={true} title={'지식 공유하기'} />
      <FormWrapper>
        <Category width='100%' />
        <TitleInput />
        <ContentInput />
        <LinkInput />
        <ButtonWrapper>
          <Button
            text='공유하기'
            size='medium'
            bgColor='color_keyBlue'
            icon={ICONS.share}
            onClick={() => {}}
          />
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
}

export default PostingPage;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 100px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: end;
  width: 300px;
`;
