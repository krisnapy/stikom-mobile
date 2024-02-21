import { colors } from "./colors";

export const shadows = {
  none: {
    shadowColor: colors.transparent,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: colors.palette.pureBlack,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.palette.pureBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  mdUp: {
    shadowColor: colors.palette.pureBlack,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  inner: {
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowColor: "palette.pureBlack",
  },
};
