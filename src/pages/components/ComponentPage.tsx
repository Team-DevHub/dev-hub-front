import FormInput from '@/components/common/FormInput/FormInput';
import { FormRegex } from '@/utils/regex';
import { useState } from 'react';

const ComponentPage = () => {
  const [input, setInput] = useState('');

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
    </div>
  );
};
export default ComponentPage;
