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
import PostingPage from './pages/PostingPage';
import useStore from './store/store';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute = ({ redirectPath = '/' }) => {
  const { user } = useStore();
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
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
