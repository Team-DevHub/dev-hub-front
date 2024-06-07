import { useState } from 'react';
import styled from 'styled-components';
import Category from '@/components/common/Category';
import TitleInput from '@/components/posting/TitleInput';
import LinkInput from '@/components/posting/LinkInput';
import ContentInput from '@/components/posting/ContentInput';
import Banner from '@/components/common/Banner';
import { postAPI } from '@/api/postAPI';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import { ICONS } from '@/assets/icon/icons';

interface PostingForm {
  category_id: number;
  title: string;
  content: string;
  links: string[];
}

function PostingPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<PostingForm>({
    category_id: 0,
    title: '',
    content: '',
    links: [''],
  });

  const handleFormChange = <T extends keyof PostingForm>(
    key: T,
    value: PostingForm[T],
  ) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  const handleSubmit = async () => {
    await postAPI
      .posting({
        categoryId: form.category_id,
        title: form.title,
        content: form.content,
        links: form.links,
      })
      .then((data) => {
        if (data.isSuccess) {
          window.alert('게시글이 작성되었습니다.');
          navigate('/');
        }
      });
    console.log(form);
  };

  const handleCategorySelect = (category_id: number) => {
    handleFormChange('category_id', category_id);
  };

  return (
    <Container>
      <Banner hasBackBtn={true} title={'지식 공유하기'} />
      <FormWrapper>
        <Category
          width='100%'
          mode='select'
          onCategorySelect={handleCategorySelect}
        />
        <TitleInput
          value={form.title}
          onChange={(e) => handleFormChange('title', e.target.value)}
        />
        <ContentInput
          value={form.content}
          onChange={(value) => handleFormChange('content', value)}
        />
        <LinkInput
          links={form.links ?? ['']}
          onLinksChange={(links) => handleFormChange('links', links)}
        />
        <ButtonWrapper>
          <Button
            text='공유하기'
            size='medium'
            bgColor='color_keyBlue'
            icon={ICONS.share}
            onClick={handleSubmit}
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
