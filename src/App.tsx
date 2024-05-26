import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Header from './components/common/Header';
import AccountLayout from './components/account/AccountLayout';
import LoginForm from './components/account/LoginForm';
import JoinForm from './components/account/JoinForm';
import FindPasswordForm from './components/account/FindPasswordForm';
import ResetPasswordForm from './components/account/ResetPasswordForm';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import { useContext } from 'react';
import LoginProvider, { LoginContext } from './provider/LoginProvider';
import PostingPage from './pages/PostingPage';

const ProtectedRoute = ({ redirectPath = '/' }) => {
  const { user } = useContext(LoginContext);
  return user ? <Navigate to={redirectPath} /> : <AccountLayout />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      },
      {
        path: 'posting',
        element: <PostingPage />,
      },
    ],
  },
  {
    path: '/account',
    element: <ProtectedRoute redirectPath='/' />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'join', element: <JoinForm /> },
      { path: 'password/find', element: <FindPasswordForm /> },
      { path: 'password/reset', element: <ResetPasswordForm /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
