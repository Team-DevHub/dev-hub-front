import { theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof theme.color;
  }
}
