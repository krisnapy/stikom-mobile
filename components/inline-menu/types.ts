import { PressableProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type InlineMenuProps = PressableProps & {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description?: string;
  visible?: boolean;
  destructive?: boolean;
};
