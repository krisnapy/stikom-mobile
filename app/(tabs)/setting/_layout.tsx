import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Setting",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="account/index"
        options={{
          title: "Account",
        }}
      />
      <Stack.Screen
        name="setting/index"
        options={{
          title: "App Setting",
        }}
      />
    </Stack>
  );
};

export default Layout;
