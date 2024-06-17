import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface Store {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const useSessionStore = create<Store>()(
  devtools(
    persist<Store>(
      (set) => ({
        isLoggedIn: false,
        setIsLoggedIn: (value: boolean) => {
          set(() => ({ isLoggedIn: value }));
        },
      }),
      {
        name: 'SessionStore',
      },
    ),
  ),
);

export default useSessionStore;
