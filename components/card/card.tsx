import React from "react";
import { Image, Text, View, useSx } from "dripsy";
import { TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { CardProps } from "./types";
import { loginBg } from "themes/images";

export const Card = ({
  title,
  size = "large",
  style,
  type = "vertical",
}: CardProps) => {
  const sx = useSx();

  return (
    <TouchableOpacity
      style={[
        sx(styles.card),
        sx(styles[size]),
        type === "horizontal" && sx(styles.horizontal),
        style,
      ]}
    >
      <Image
        style={[
          sx(styles.image),
          type === "horizontal" && sx(styles.squareImage),
        ]}
        source={loginBg}
      />

      <View sx={sx(styles.textContainer)}>
        <Text sx={sx(styles.title)} numberOfLines={1}>
          {title}
        </Text>
        <Text sx={sx(styles.codeCourse)}>DI-229</Text>
        <Text sx={sx(styles.timeline)}>Rabu 08:00-09:40</Text>
      </View>
    </TouchableOpacity>
  );
};
