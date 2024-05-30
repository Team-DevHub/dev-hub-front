import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
}

interface Store {
  user: User | null;
  setUser: (id: string) => void;
  logOut: () => void;
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
        logOut: () => set(() => ({ user: null, accessToken: null })),
      }),
      {
        name: 'store',
      },
    ),
  ),
);

export default useStore;
