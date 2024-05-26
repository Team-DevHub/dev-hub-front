import styled from 'styled-components';
import Category from '@/components/common/Category';
import TitleInput from '@/components/createPost/TitleInput';
import LinkInput from '@/components/createPost/LinkInput';
import ContentInput from '@/components/createPost/ContentInput';
import Banner from '@/components/common/Banner';
import FormButton from '@/components/common/FormInput/FormButton';

function CreatePost() {
  return (
    <Container>
      <Banner hasBackBtn={true} title={'지식 공유하기'} />
      <FormWrapper>
        <Category width='100%' />
        <TitleInput />
        <ContentInput />
        <LinkInput />
        <ButtonWrapper>
          <FormButton text='공유하기' fontSize='14px' onClick={() => {}} />
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
}

export default CreatePost;

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
  justify-content: flex-end;
`;
