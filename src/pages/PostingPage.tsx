import styled from 'styled-components';
import Category from '@/components/common/Category';
import TitleInput from '@/components/posting/TitleInput';
import LinkInput from '@/components/posting/LinkInput';
import ContentInput from '@/components/posting/ContentInput';
import { postAPI } from '@/api/requests/postAPI';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import { ICONS } from '../constants/assets';
import { useForm, Controller } from 'react-hook-form';
import BannerWithTitle from '@/components/common/Banner/BannerWithTitle';

interface PostingForm {
  category_id: number;
  title: string;
  content: string;
  links: string[];
}

function PostingPage() {
  const navigate = useNavigate();
  const { handleSubmit, control, setValue, watch } = useForm<PostingForm>({
    defaultValues: {
      category_id: 0,
      title: '',
      content: '',
      links: [''],
    },
  });

  const formValues = watch();

  const onSubmit = async (data: PostingForm) => {
    const response = await postAPI.posting({
      categoryId: data.category_id,
      title: data.title,
      content: data.content,
      links: data.links,
    });
    if (response?.isSuccess) {
      window.alert('게시글이 작성되었습니다.');
      navigate('/');
    }
  };

  const handleCategorySelect = (category_id: number) => {
    setValue('category_id', category_id);
  };
  const isFormFilled =
    formValues.category_id > 0 &&
    formValues.title.trim() !== '' &&
    formValues.content.trim() !== '';

  return (
    <Container>
      <BannerWithTitle title={'지식 공유하기'} />
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Category
          width='100%'
          mode='select'
          onCategorySelect={handleCategorySelect}
        />
        <Controller
          name='title'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TitleInput {...field} />}
        />
        <Controller
          name='content'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <ContentInput {...field} />}
        />
        <Controller
          name='links'
          control={control}
          render={({ field }) => (
            <LinkInput
              links={field.value ?? ['']}
              onLinksChange={(links) => field.onChange(links)}
            />
          )}
        />
        <ButtonWrapper>
          <Button
            text='공유하기'
            size='medium'
            bgColor='color_keyBlue'
            icon={ICONS.share}
            onClick={handleSubmit(onSubmit)}
            disabled={!isFormFilled}
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
