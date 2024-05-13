import Header from '@/components/common/Header';
import HomePage from '@/pages/HomePage';
import ComponentPage from '@/pages/components/ComponentPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'test',
    children: [
      { index: true, element: <div>test</div> },
      { path: 'nesting', element: <div>/test/nesting</div> },
      {
        path: 'components',
        children: [{ index: true, element: <ComponentPage /> }],
      },
    ],
  },
]);

const MainRouter = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />;
    </>
  );
};
export default MainRouter;
