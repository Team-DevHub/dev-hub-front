import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Actions {
  setIsDonePosting: (value: boolean) => void;
  setIsDoneJoin: (value: boolean) => void;
  setIsConfirmOpen: (value: boolean) => void;
  setIsConfirmed: (value: boolean) => void;
  setIsDeleted: (value: boolean) => void;
  setIsDoneReset: (value: boolean) => void;
  resetConfirm: () => void;
}

interface Store {
  isDonePosting: boolean;
  isDoneJoin: boolean;
  isDoneReset: boolean;
  isConfirmOpen: boolean;
  isConfirmed: boolean;
  isDeleted: boolean;
  actions: Actions;
}

const usePopUpStore = create<Store>()(
  devtools(
    (set) => ({
      isDonePosting: false,
      isDoneJoin: false,
      isDoneReset: false,
      isConfirmOpen: false,
      isConfirmed: false,
      isDeleted: false,
      actions: {
        setIsDonePosting: (value: boolean) => {
          set(() => ({ isDonePosting: value }));
        },
        setIsDoneJoin: (value: boolean) => {
          set(() => ({ isDoneJoin: value }));
        },
        setIsDoneReset: (value: boolean) => {
          set(() => ({ isDoneReset: value }));
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
            isConfirmOpen: false,
            isConfirmed: false,
            isDeleted: false,
          }));
        },
      },
    }),
    {
      name: 'PopUpStore',
      partialize: (state: Store) => ({
        setIsDonePosting: state.actions.setIsDonePosting,
        setIsDoneJoin: state.actions.setIsDoneJoin,
        setIsDoneReset: state.actions.setIsDoneReset,
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

export const useResetPopUp = () => usePopUpStore((state) => state.isDoneReset);
export const usePostingPopUp = () =>
  usePopUpStore((state) => state.isDonePosting);
export const useJoinPopUp = () => usePopUpStore((state) => state.isDoneJoin);
export const usePopUpActions = () => usePopUpStore((state) => state.actions);

export default usePopUpStore;
