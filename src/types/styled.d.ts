import { theme } from "@/styles/theme";
type themeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
