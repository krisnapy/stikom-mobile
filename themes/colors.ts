import { palette } from "./palette";

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */

export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  backdrop: "rgba(22, 22, 22, 0.3)",
  background: palette.white,
  error: palette.red,
  text: palette.black,
  textInverted: palette.white,
  textSecondary: palette.greyDark,
  textPlaceholder: palette.greyMid,
  textDisabled: palette.greyMid,
  textDisabledInverted: palette.greyLight,
  borderLight: palette.greyLight,
  borderMid: palette.greyMid,
  borderDark: palette.greyDark,
  borderDisabled: palette.greyLight,
  navbar: palette.white,
  navbarInverted: "rgba(0, 0, 0, 0.50)",
  navbarStory: palette.pureBlack,
};
