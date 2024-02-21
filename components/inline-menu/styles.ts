import { SxStyles } from "themes/types";
import { fontScale, heightScale, widthScale } from "utils/scale";

export const styles: SxStyles = {
  container: (theme) => ({
    flexDirection: "row",
    px: widthScale(theme.space.rg),
    py: heightScale(theme.space.rg),
  }),
  containerPressed: (theme) => ({
    bg: "palette.brandLightest",
    borderRadius: theme.radius.small,
  }),
  content: (theme) => ({
    flex: 1,
    ml: widthScale(theme.space.rg),
  }),
  icon: (theme) => ({
    color: "text",
    lineHeight: heightScale(22),
    fontSize: fontScale(theme.fontSizes.lg),
  }),
  disabled: () => ({
    color: "textDisabled",
  }),
  destructive: () => ({
    color: "palette.greyDark",
  }),
};
