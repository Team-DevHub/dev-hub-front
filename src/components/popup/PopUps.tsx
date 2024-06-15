import usePopUpStore, { usePopUpActions } from '@/store/popUpStore';
import ConfirmPopUp from './ConfirmPopUp';
import { useEffect } from 'react';
import AlertPopUp from './AlertPopUp';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/constants/path';

function PopUps() {
  const navigate = useNavigate();
  const { isConfirmOpen, isDoneJoin, isDonePosting, isDoneReset, isDeleted } =
    usePopUpStore();
  const { setIsDonePosting, resetConfirm, setIsDoneJoin, setIsDoneReset } =
    usePopUpActions();

  if (isConfirmOpen || isDoneJoin || isDonePosting || isDoneReset) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        resetConfirm();
        location.reload();
      }, 2000);
    }
  }, [isDeleted, resetConfirm]);

  useEffect(() => {
    if (isDoneJoin) {
      setTimeout(() => {
        setIsDoneJoin(false);
        navigate('/account/login');
      }, 2000);
    }
  }, [isDoneJoin]);

  useEffect(() => {
    if (isDonePosting) {
      setTimeout(() => {
        setIsDonePosting(false);
        navigate('/');
      }, 2000);
    }
  }, [isDonePosting, setIsDonePosting]);

  useEffect(() => {
    if (isDoneReset) {
      setTimeout(() => {
        setIsDoneReset(false);
        navigate(LOGIN_ROUTER_PATH.login);
      }, 2000);
    }
  }, [isDoneReset]);

  return (
    <>
      {isConfirmOpen && <ConfirmPopUp />}
      {isDonePosting && <AlertPopUp>게시글 작성 완료!</AlertPopUp>}
      {isDoneJoin && <AlertPopUp>회원가입 완료!</AlertPopUp>}
      {isDoneReset && <AlertPopUp>비밀번호 재설정 완료!</AlertPopUp>}
    </>
  );
}

export default PopUps;
