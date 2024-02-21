import React, { FunctionComponent, useState } from "react";
import { Text, TextInput, View, useSx } from "dripsy";

import { colors } from "themes";

import { styles } from "./styles";
import { InputProps } from "./types";

export const Input: FunctionComponent<InputProps> = (props) => {
  const { label, onBlur } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const sx = useSx();

  return (
    <View>
      {label && <Text sx={sx(styles.label)}>{label}</Text>}

      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        placeholderTextColor={colors.palette.grey}
        style={[sx(styles.input), focused && sx(styles.focused)]}
        {...props}
      />
    </View>
  );
};
