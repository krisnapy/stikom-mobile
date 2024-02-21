import upperFirst from "lodash/upperFirst";
import { ViewStyle } from "@expo/html-elements/build/primitives/View";

import { space } from "themes/space";
import { heightScale, widthScale } from "utils/scale";

import { SxStyles } from "./types";

type SpacingStyle = Record<string, Record<string, number>>;

const createSpacingStyle = (
  prefix: string,
  scale: (value: number) => number
): SpacingStyle =>
  Object.entries(space).reduce((r: SpacingStyle, [k, v]) => {
    r[`${prefix}${upperFirst(k)}`] = { [prefix]: scale(v) };

    return r;
  }, {});

export const utility: SxStyles = {
  /* FLEX OPTIONS */
  flexOne: {
    flex: 1,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "navbarInverted",
  },
  p0: {
    py: 0,
    px: 0,
  },

  /* SPACING */
  ...createSpacingStyle("pt", heightScale),
  ...createSpacingStyle("pr", widthScale),
  ...createSpacingStyle("pb", heightScale),
  ...createSpacingStyle("pl", widthScale),
  ...createSpacingStyle("py", heightScale),
  ...createSpacingStyle("px", widthScale),
  ...createSpacingStyle("mt", heightScale),
  ...createSpacingStyle("mr", widthScale),
  ...createSpacingStyle("mb", heightScale),
  ...createSpacingStyle("ml", widthScale),
  ...createSpacingStyle("my", heightScale),
  ...createSpacingStyle("mx", widthScale),
};

export const utilityStyles: Record<string, ViewStyle> = {
  flexOne: {
    flex: 1,
  },
};
