import { LoginContext } from '@/provider/LoginProvider';
import { useContext, useEffect, useState } from 'react';
import MainRouter from './MainRouter';
import LoginRouter from './LoginRouter';
import { UserKeyFromStorage } from '@/constants/storage';

/**
 * 루트 라우터
 *
 *
 * @description 임시 로그인 체크
 * devhub 최초 진입 시에 로그인 여부 판별
 *
 * useEffect를 통해서 저장되어 있는 로그인 정보가 있는지 확인하고 필요한 라우터를 리턴함
 */

const RootRouter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { user, handleUserChange } = useContext(LoginContext);

  useEffect(() => {
    const userFromSessionStorage = JSON.parse(
      window.sessionStorage.getItem(UserKeyFromStorage) || 'null',
    );

    handleUserChange(userFromSessionStorage);

    setIsChecked(true);
  }, []);

  if (!isChecked) return null;

  return user ? <MainRouter /> : <LoginRouter />;
};
export default RootRouter;
