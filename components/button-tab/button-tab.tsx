import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { Text, useSx } from "dripsy";

import { fontScale } from "utils/scale";
import { palette } from "themes";

import { ButtonTabProps } from "./types";

export const ButtonTab = (props: ButtonTabProps) => {
  const sx = useSx();

  const { onPress, accessibilityState, icon } = props;
  const focused = accessibilityState?.selected;
  const title = (props.children as any).props.children[1].props.children;

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={fontScale(24)}
        color={focused ? palette.blue : palette.greyMid}
      />
      <Text
        sx={sx((theme) => ({
          fontSize: theme.fontSizes.sm,
        }))}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
