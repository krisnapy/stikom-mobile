import { SxStyles } from "themes/types";
import { heightScale, widthScale } from "utils/scale";

export const styles: SxStyles = {
  card: (theme) => ({
    flexDirection: "column",
    px: widthScale(theme.space.sm),
    py: heightScale(theme.space.sm),
    borderRadius: theme.radius.small,
    backgroundColor: theme.colors.palette.white,
    justifyContent: "space-between",
    gap: heightScale(theme.space.sm),
  }),
  auto: () => ({
    width: "auto",
  }),
  small: () => ({
    width: widthScale(200),
  }),
  medium: () => ({
    width: widthScale(250),
  }),
  large: () => ({
    width: widthScale(300),
  }),
  horizontal: () => ({
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  }),
  cardPressed: (theme) => ({
    backgroundColor: theme.colors.palette.brandLightest,
  }),
  squareImage: () => ({
    height: heightScale(70),
    width: widthScale(70),
  }),
  image: (theme) => ({
    width: "100%",
    height: heightScale(120),
    borderRadius: theme.radius.xSmall,
  }),
  textContainer: () => ({
    flexDirection: "column",
    height: "100%",
    flex: 1,
  }),
  title: (theme) => ({
    fontSize: theme.fontSizes.rg,
    fontWeight: "600",
    color: theme.colors.text,
    whiteSpace: "nowrap",
    width: "100%",
    overflow: "hidden",
  }),
  codeCourse: (theme) => ({
    fontSize: theme.fontSizes.rg,
    fontWeight: "700",
    color: theme.colors.textDisabled,
  }),
  timeline: (theme) => ({
    fontSize: theme.fontSizes.md,
    fontWeight: "500",
    textAlign: "right",
    marginTop: heightScale(theme.space.xs),
    color: theme.colors.textPlaceholder,
    flex: 1,
    textAlignVertical: "bottom",
  }),
};
