import { SxStyles } from "themes/types";
import { heightScale } from "utils/scale";

export const styles: SxStyles = {
  outlinedButton: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xSmall,
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    gap: heightScale(theme.space.sm),
    padding: heightScale(theme.space.sm),
    borderColor: theme.colors.palette.brandPrimary,
  }),
  outlinedButtonPressed: (theme) => ({
    backgroundColor: theme.colors.palette.brandPrimary,
    color: theme.colors.palette.white,
  }),
  filledButton: (theme) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.colors.palette.brandPrimary,
    padding: heightScale(theme.space.sm),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xSmall,
  }),
  filledButtonPressed: (theme) => ({
    backgroundColor: theme.colors.palette.brandMid,
  }),
  buttonText: (theme) => ({
    fontSize: theme.fontSizes.rg,
    fontWeight: "600",
  }),
};
