import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
}

interface Store {
  user: User | null;
  accessToken: string | null;
  setUser: (id: string) => void;
  setToken: (token: string) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        user: null,
        setUser: (userId: string) =>
          set(() => ({
            user: {
              id: userId,
            },
          })),
        accessToken: null,
        setToken: (token: string) => set(() => ({ accessToken: token })),
      }),
      {
        name: 'store',
      },
    ),
  ),
);

export default useStore;
