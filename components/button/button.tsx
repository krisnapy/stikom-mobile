import React from "react";
import { Fragment } from "react";
import { Pressable, Text, useSx } from "dripsy";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "themes";

import { ButtonProps } from "./types";
import { styles } from "./styles";

export const Button = (props: ButtonProps) => {
  const { label, icon, outlined = false, ...rest } = props;

  const sx = useSx();

  return (
    <Pressable
      style={({ pressed }) => [
        outlined ? sx(styles.outlinedButton) : sx(styles.filledButton),
        outlined
          ? pressed && sx(styles.outlinedButtonPressed)
          : pressed && sx(styles.filledButtonPressed),
      ]}
      {...rest}
    >
      {({ pressed }) => {
        const color = outlined
          ? pressed
            ? theme.colors.palette.white
            : theme.colors.palette.brandPrimary
          : theme.colors.palette.white;

        return (
          <Fragment>
            {icon && <Ionicons name={icon} size={24} color={color} />}
            <Text
              style={[
                sx(styles.buttonText),
                { color, fontSize: theme.fontSizes.rg },
              ]}
            >
              {label}
            </Text>
          </Fragment>
        );
      }}
    </Pressable>
  );
};
