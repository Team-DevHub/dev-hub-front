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
import AccountLayout from './components/layouts/AccountLayout';
import LoginForm from './components/account/LoginForm';
import JoinForm from './components/account/JoinForm';
import FindPasswordForm from './components/account/FindPasswordForm';
import ResetPasswordForm from './components/account/ResetPasswordForm';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import PostingPage from './pages/PostingPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './components/layouts/MainLayout';
import Footer from './components/common/Footer/Footer';
import ScrollToTop from './components/layouts/ScrollToTop';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ redirectPath = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Navigate to={redirectPath} />
  ) : (
    <ScrollToTop>
      <AccountLayout />
    </ScrollToTop>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ScrollToTop>
        <Header />
        <MainLayout>
          <Outlet />
        </MainLayout>
        <Footer />
      </ScrollToTop>
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
