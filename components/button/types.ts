import { PressableProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SubmitHandler } from "react-hook-form";

export type ButtonProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  outlined?: boolean;
} & PressableProps;

export type ControlledButtonProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  outlined?: boolean;
  onPress: SubmitHandler<any>;
};
