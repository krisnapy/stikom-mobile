import { Dimensions, Keyboard, Platform } from "react-native";
import { SxStyles } from "themes";
import { heightScale } from "utils/scale";

export const styles: SxStyles = {
  background: () => ({
    flex: 1,
    position: "relative",
  }),
  backgroundImage: () => ({
    resizeMode: "cover",
    position: "absolute",
    height: Dimensions.get("window").height / 2,
    left: 0,
    top: 0,
  }),
  headerWrapper: (theme) => ({
    width: "90%",
    paddingVertical: heightScale(theme.space["4xl"]),
    marginBottom: heightScale(theme.space.xl),
    paddingHorizontal: theme.space.rg,
  }),
  headerText: (theme) => ({
    color: theme.colors.palette.white,
    fontSize: theme.fontSizes["2xl"],
    fontWeight: "600",
    lineHeight: theme.space.xl,
  }),
  settingsWrapper: (theme) => ({
    flex: 1,
    backgroundColor: "background",
    padding: theme.space.rg,
    boxShadow: "md",
    width: "100%",
    borderTopLeftRadius: theme.radius.large,
    borderTopRightRadius: theme.radius.large,
    pb: Platform.select({
      ios: heightScale(theme.space.xxl),
      android: heightScale(theme.space.xl),
    }),
  }),
  textWrapper: (theme) => ({
    paddingVertical: heightScale(theme.space.rg),
  }),
  textTitle: (theme) => ({
    fontSize: theme.fontSizes.xl,
    fontWeight: "700",
    color: theme.colors.palette.brandDark,
  }),
  textSubtitle: (theme) => ({
    fontSize: theme.fontSizes.md,
    fontWeight: "600",
    color: theme.colors.palette.grey,
  }),
  formWrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: heightScale(theme.space.md),
  }),
  forgotPassword: (theme) => ({
    color: theme.colors.palette.brandPrimary,
    fontSize: theme.fontSizes.md,
    fontWeight: "600",
    marginBottom: heightScale(theme.space.sm),
  }),
  loginButton: (theme) => ({
    backgroundColor: theme.colors.palette.brandPrimary,
    padding: heightScale(theme.space.sm),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xSmall,
  }),
  loginButtonPressed: (theme) => ({
    backgroundColor: theme.colors.palette.brandMid,
  }),
  loginButtonText: (theme) => ({
    color: theme.colors.palette.white,
    fontSize: theme.fontSizes.rg,
    fontWeight: "600",
  }),
  facebookButton: (theme) => ({
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
  facebookButtonPressed: (theme) => ({
    backgroundColor: theme.colors.palette.brandPrimary,
    color: theme.colors.palette.white,
  }),
  divider: (theme) => ({
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.palette.grey,
  }),
};
