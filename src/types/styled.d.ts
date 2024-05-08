import { theme } from "../styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: typeof theme.color;
    fontSize: typeof theme.fontSize;
  }
}
