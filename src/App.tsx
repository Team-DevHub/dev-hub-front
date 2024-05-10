import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/common/Header";
import ComponentPage from './pages/components/ComponentPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "test",
    children: [
      { index: true, element: <div>test</div> },
      { path: "nesting", element: <div>/test/nesting</div> },
    ],
  },
  {
    path: 'components',
    children: [{ index: true, element: <ComponentPage /> }],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
