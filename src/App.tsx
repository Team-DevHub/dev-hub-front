import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";

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
