import { makeTheme } from "dripsy";

import { colors } from "./colors";
import { fontSizes } from "./fonts";
import { layout } from "./layout";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { space } from "./space";
import { text } from "./text";

export const theme = makeTheme({
  colors,
  fontSizes,
  layout,
  radius,
  shadows,
  space,
  text,
});

export * from "./types";
export * from "./colors";
export * from "./palette";
