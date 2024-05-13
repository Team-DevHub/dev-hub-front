import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import RootRouter from './routes/RootRouter';
import LoginProvider from './provider/LoginProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginProvider>
        <RootRouter />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
