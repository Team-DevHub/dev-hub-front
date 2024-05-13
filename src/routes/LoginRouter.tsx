import AccountLayout from '@/components/account/AccountLayout';
import FindPasswordForm from '@/components/account/FindPasswordForm';
import JoinForm from '@/components/account/JoinForm';
import LoginForm from '@/components/account/LoginForm';
import ResetPasswordForm from '@/components/account/ResetPasswordForm';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

export const LOGIN_ROUTER_PATH = {
  login: '/account/login',
  join: '/account/join',
  password: {
    find: '/account/password/find',
    reset: '/account/password/reset',
  },
};

const loginRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/account/login'} />,
    errorElement: <Navigate to={'/account/login'} />,
  },
  {
    path: '/account',
    element: <AccountLayout />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'join', element: <JoinForm /> },
      { path: 'password/find', element: <FindPasswordForm /> },
      { path: 'password/reset', element: <ResetPasswordForm /> },
    ],
  },
]);

const LoginRouter = () => {
  return <RouterProvider router={loginRouter} />;
};
export default LoginRouter;
