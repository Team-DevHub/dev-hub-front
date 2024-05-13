import { UserKeyFromStorage } from '@/constants/storage';
import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface User {
  name: string;
  //기타 필요한 정보
}

interface LoginContext {
  user: User | null;
  handleUserChange: (user: User | null) => void;
}

interface Props {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContext>({
  user: null,
  handleUserChange: () => {},
});

const LoginProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserInfoToStorage = (user: User | null) => {
    window.sessionStorage.setItem(UserKeyFromStorage, JSON.stringify(user));
  };

  const handleUserChange = useCallback((user: User | null) => {
    setUser(user);
    setUserInfoToStorage(user);
  }, []);

  const value = useMemo(() => {
    return {
      user,
      handleUserChange,
    };
  }, [user, handleUserChange]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
