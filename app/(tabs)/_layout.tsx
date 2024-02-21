import { Tabs } from "expo-router";
import React from "react";

import { ButtonTab } from "components";
import { widthScale } from "utils/scale";
import { radius } from "themes/radius";
import { palette } from "themes";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: widthScale(55),
          borderTopStartRadius: radius.medium,
          borderTopEndRadius: radius.medium,
          borderTopWidth: 0,
          backgroundColor: palette.white,
          position: "absolute",
          bottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          headerShown: false,
          tabBarButton: (props: any) => <ButtonTab {...props} icon="home" />,
        }}
      />

      <Tabs.Screen
        name="assignment/index"
        options={{
          headerTitle: "Assignment",
          title: "Assignment",
          tabBarButton: (props: any) => <ButtonTab {...props} icon="library" />,
        }}
      />

      <Tabs.Screen
        name="calendar/index"
        options={{
          title: "Calendar",
          headerTitle: "Calendar",
          tabBarButton: (props: any) => (
            <ButtonTab {...props} icon="calendar" />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          headerTitle: "Setting",
          tabBarButton: (props: any) => (
            <ButtonTab {...props} title="Setting" icon="settings" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
