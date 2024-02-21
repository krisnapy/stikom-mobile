import { PressableProps } from "react-native";

export type CardProps = PressableProps & {
  title: string;
  description?: string;
  size?: "small" | "medium" | "large" | "auto";
  type?: "horizontal" | "vertical";
};
