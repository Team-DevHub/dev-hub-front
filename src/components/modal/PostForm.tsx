import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import Category from '@/components/common/Category';
import TitleInput from '@/components/posting/TitleInput';
import LinkInput from '@/components/posting/LinkInput';
import ContentInput from '@/components/posting/ContentInput';
import Button from '@/components/common/Button';
import { ICONS } from '@/constants/assets';
import BannerWithTitle from '@/components/common/Banner/BannerWithTitle';
import { useEffect } from 'react';

interface PostingFormProps {
  initialValues?: PostingForm;
  onSubmit: (data: PostingForm) => void;
  isEdit?: boolean;
}

interface PostingForm {
  category_id: number;
  title: string;
  content: string;
  links: string[];
}

function PostingForm({
  initialValues,
  onSubmit,
  isEdit = false,
}: PostingFormProps) {
  const { handleSubmit, control, setValue, watch } = useForm<PostingForm>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (initialValues) {
      setValue('category_id', initialValues.category_id);
      setValue('title', initialValues.title);
      setValue('content', initialValues.content);
      setValue('links', initialValues.links);
    }
  }, [initialValues, setValue]);

  const formValues = watch();

  const handleCategorySelect = (category_id: number) => {
    setValue('category_id', category_id);
  };

  const isFormFilled =
    formValues.category_id > 0 &&
    formValues.title.trim() !== '' &&
    formValues.content.trim() !== '';

  return (
    <Container>
      <BannerWithTitle title={isEdit ? '수정하기' : '지식 공유하기'} />
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Category
          width='100%'
          mode='select'
          onCategorySelect={handleCategorySelect}
          initialSelected={initialValues?.category_id}
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
            text={isEdit ? '수정하기' : '공유하기'}
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

export default PostingForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 100px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: end;
  width: 300px;
`;
