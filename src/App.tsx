import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/common/Header";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path :"/mypage",
    element: <MyPage/>
  },
  {
    path: "test",
    children: [
      { index: true, element: <div>test</div> },
      { path: "nesting", element: <div>/test/nesting</div> },
    ],
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
