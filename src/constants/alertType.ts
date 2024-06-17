import { LOGIN_ROUTER_PATH } from './path';

export const ALERT_TYPE = {
  join: {
    route: LOGIN_ROUTER_PATH.login,
    title: '회원가입 완료!',
  },
  reset: {
    route: LOGIN_ROUTER_PATH.login,
    title: '비밀번호 재설정 완료!',
  },
  posting: {
    route: '/',
    title: '게시글 작성 완료!',
  },
  comment: {
    title: '댓글 삭제 완료!',
  },
};
