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
  handleLoginUser: (user: User | null) => void;
  handleLogOutUser: () => void;
}

interface Props {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContext>({
  user: null,
  handleLoginUser: () => {},
  handleLogOutUser: () => {},
});

const LoginProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(
    sessionStorage.getItem(UserKeyFromStorage)
      ? (JSON.parse(sessionStorage.getItem(UserKeyFromStorage)!) as User)
      : null,
  );

  const handleLoginUser = useCallback((user: User | null) => {
    setUser(user);
    sessionStorage.setItem(UserKeyFromStorage, JSON.stringify(user));
  }, []);

  const handleLogOutUser = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem(UserKeyFromStorage);
  }, []);

  const value = useMemo(() => {
    return {
      user,
      handleLoginUser,
      handleLogOutUser,
    };
  }, [user, handleLoginUser, handleLogOutUser]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
