import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export type ButtonTabProps = TouchableOpacityProps & {
  icon: keyof typeof Ionicons.glyphMap;
} & { children?: React.ReactNode };
