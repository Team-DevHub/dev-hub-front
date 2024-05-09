import Checkbox from '@/components/common/FormInput/Checkbox';
import FormButton from '@/components/common/FormInput/FormButton';
import FormInput from '@/components/common/FormInput/FormInput';
import { FormRegex } from '@/utils/regex';
import { useState } from 'react';

const ComponentPage = () => {
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <FormInput
        id='email-input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label={'Email'}
        regex={FormRegex.email}
        errorMessage='유효하지 않은 이메일입니다'
        placeholder='이메일을 입력해주세요'
      />
      <Checkbox
        id={'checkbox'}
        checked={checked}
        label='로그인 정보 저장'
        onClick={() => setChecked(!checked)}
      />
      <FormButton
        text={'로그인'}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};
export default ComponentPage;
