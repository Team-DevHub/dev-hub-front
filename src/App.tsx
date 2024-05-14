import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import AccountLayout from './components/account/AccountLayout';
import LoginForm from './components/account/LoginForm';
import JoinForm from './components/account/JoinForm';
import FindPasswordForm from './components/account/FindPasswordForm';
import ResetPasswordForm from './components/account/ResetPasswordForm';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />,
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
