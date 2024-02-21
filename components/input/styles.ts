import { primaryFont } from "themes/fonts";
import { SxStyles } from "themes/types";

export const styles: SxStyles = {
  input: (theme) => ({
    fontSize: theme.fontSizes.md,
    padding: theme.space.sm,
    backgroundColor: theme.colors.palette.greyLight,
    borderRadius: theme.radius.xSmall,
    marginVertical: theme.space.sm,
    fontWeight: "600",
    color: theme.colors.palette.greyDark,
    borderWidth: 1,
    borderColor: theme.colors.palette.greyLight,
  }),
  label: (theme) => ({
    fontSize: theme.fontSizes.md,
    fontWeight: "600",
    fontFamily: primaryFont.semiBold,
    color: theme.colors.palette.greyMid,
  }),
  focused: (theme) => ({
    shadowColor: theme.colors.palette.grey,
    shadowOpacity: 0.3,
    borderWidth: 1,
    borderColor: theme.colors.palette.grey,
  }),
};
