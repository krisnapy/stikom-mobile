import { Dimensions, PixelRatio, Platform } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;
const widthBaseScale = SCREEN_WIDTH / BASE_WIDTH;
const heightBaseScale = SCREEN_HEIGHT / BASE_HEIGHT;

function scale(size: number, based: "width" | "height") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(
    PixelRatio.roundToNearestPixel(newSize) *
      (Platform.select({ ios: 1, android: 1.1 }) || 1)
  );
}

export const widthScale = (size: number) => {
  return scale(size, "width");
};

export const heightScale = (size: number) => {
  return scale(size, "height");
};

export const fontScale = (size: number) => {
  return heightScale(size);
};
