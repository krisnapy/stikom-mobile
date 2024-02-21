import { Text, View, useSx } from "dripsy";
import React, { useMemo } from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { InlineMenuProps } from "./types";
import { styles } from "./styles";

export const InlineMenu = (props: InlineMenuProps) => {
  const sx = useSx();
  const {
    title,
    description,
    icon,
    visible = true,
    disabled = false,
    destructive = false,
    ...pressableProps
  } = props;

  const iconStyle = useMemo(() => {
    let style = sx(styles.icon);

    if (destructive) {
      style = { ...style, ...sx(styles.destructive) };
    }

    if (disabled) {
      style = { ...style, ...sx(styles.disabled) };
    }

    return style;
  }, [disabled, destructive]);

  const labelStyle = useMemo(() => {
    let style = {};

    if (destructive) {
      style = { ...style, ...sx(styles.destructive) };
    }

    if (disabled) {
      style = { ...style, ...sx(styles.disabled) };
    }

    return style;
  }, [disabled, destructive]);

  if (!visible) return null;

  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? sx(styles.containerPressed) : {},
        sx(styles.container),
      ]}
      {...pressableProps}
    >
      <Ionicons name={icon} style={iconStyle} />

      <View sx={styles.content}>
        <Text variants={["body"]} sx={labelStyle}>
          {title}
        </Text>
        {description && (
          <Text variants={["bodyAlt", disabled ? "disabled" : "secondary"]}>
            {description}
          </Text>
        )}
      </View>
    </Pressable>
  );
};
