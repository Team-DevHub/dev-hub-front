import { userAPI } from '@/api/requests/userAPI';
import { FindPasswordForm } from '@/components/account/FindPasswordForm';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import { usePopUpActions } from '@/store/popUpStore';
import { useNavigate } from 'react-router-dom';

export const usePassword = () => {
  const { setIsDoneReset } = usePopUpActions();
  const navigate = useNavigate();

  const resetRequest = async (data: FindPasswordForm) => {
    await userAPI.requestReset(data).then((res) => {
      if (res?.isSuccess) {
        navigate(LOGIN_ROUTER_PATH.password.reset, {
          state: { email: data.email },
        });
      } else {
        window.alert('존재하지 않는 유저입니다.');
      }
    });
  };

  const resetPassword = async (email: string, password: string) => {
    await userAPI.resetPassword({ email, password }).then((res) => {
      if (res.isSuccess) {
        setIsDoneReset(true);
      }
    });
  };

  return { resetRequest, resetPassword };
};
