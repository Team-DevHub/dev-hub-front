import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Actions {
  setIsOpenAlert: (value: boolean, type: AlertType | null) => void;
  setIsConfirmOpen: (value: boolean) => void;
  setIsConfirmed: (value: boolean) => void;
  setIsDeleted: (value: boolean) => void;
  resetConfirm: () => void;
}

type AlertType = 'join' | 'posting' | 'reset' | 'comment' | 'editing';

interface Store {
  alertType: AlertType | null;
  isOpenAlert: boolean;
  isConfirmOpen: boolean;
  isConfirmed: boolean;
  isDeleted: boolean;
  actions: Actions;
}

const usePopUpStore = create<Store>()(
  devtools(
    (set) => ({
      alertType: null,
      isOpenAlert: false,
      isConfirmOpen: false,
      isConfirmed: false,
      isDeleted: false,
      actions: {
        setIsOpenAlert: (value: boolean, type: AlertType | null) => {
          set(() => ({ isOpenAlert: value, alertType: type }));
        },
        setIsConfirmOpen: (value: boolean) => {
          set(() => ({ isConfirmOpen: value }));
        },
        setIsConfirmed: (value: boolean) => {
          set(() => ({ isConfirmed: value }));
        },
        setIsDeleted: (value: boolean) => {
          set(() => ({ isDeleted: value }));
        },
        resetConfirm: () => {
          set(() => ({
            isConfirmed: false,
            isDeleted: false,
          }));
        },
      },
    }),
    {
      name: 'PopUpStore',
      partialize: (state: Store) => ({
        setIsOpenAlert: state.actions.setIsOpenAlert,
        setIsConfirmOpen: state.actions.setIsConfirmOpen,
        setIsConfirmed: state.actions.setIsConfirmed,
        setIsDeleted: state.actions.setIsDeleted,
        resetConfirm: state.actions.resetConfirm,
      }),
    },
  ),
);

export const useConfirm = () =>
  usePopUpStore((state) => ({
    isConfirmOpen: state.isConfirmOpen,
    isConfirmed: state.isConfirmed,
    isDeleted: state.isDeleted,
  }));

export const useAlert = () => usePopUpStore((state) => state.isOpenAlert);
export const usePopUpActions = () => usePopUpStore((state) => state.actions);

export default usePopUpStore;
