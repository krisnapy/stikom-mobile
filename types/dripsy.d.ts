import { theme } from "themes";

type MyTheme = typeof theme;

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
