import { fontScale } from "utils/scale";

import { primaryFont } from "./fonts";

export const text: Record<string, object> = {
  largeTitle: {
    fontFamily: primaryFont.medium,
    fontSize: fontScale(32),
    lineHeight: fontScale(41),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  title1: {
    fontFamily: primaryFont.medium,
    fontSize: fontScale(26),
    lineHeight: fontScale(34),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  title2: {
    fontFamily: primaryFont.semiBold,
    fontSize: fontScale(20),
    lineHeight: fontScale(28),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  title3: {
    fontFamily: primaryFont.semiBold,
    fontSize: fontScale(18),
    lineHeight: fontScale(25),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  body: {
    fontFamily: primaryFont.medium,
    fontSize: fontScale(16),
    lineHeight: fontScale(22),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  bodyBold: {
    fontFamily: primaryFont.semiBold,
    fontSize: fontScale(16),
    lineHeight: fontScale(22),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  bodyAlt: {
    fontFamily: primaryFont.medium,
    fontSize: fontScale(14),
    lineHeight: fontScale(20),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  bodyAltBold: {
    fontFamily: primaryFont.semiBold,
    fontSize: fontScale(14),
    lineHeight: fontScale(20),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  caption: {
    fontFamily: primaryFont.medium,
    fontSize: fontScale(12),
    lineHeight: fontScale(16),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  captionBold: {
    fontFamily: primaryFont.semiBold,
    fontSize: fontScale(12),
    lineHeight: fontScale(16),
    letterSpacing: -0.4,
    color: "palette.black",
  },
  alignLeft: {
    textAlign: "left",
  },
  alignCenter: {
    textAlign: "center",
  },
  alignRight: {
    textAlign: "right",
  },
  alignJustify: {
    textAlign: "justify",
  },
  error: {
    color: "error",
  },
  secondary: {
    color: "textSecondary",
  },
  placeholder: {
    color: "textPlaceholder",
  },
  disabled: {
    color: "textDisabled",
  },
  inverted: {
    color: "textInverted",
  },
};
