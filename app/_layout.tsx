import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";

import { AuthProvider } from "contexts/auth-provider";
import "locales/i18n";
import { useReactotron } from "services/reactotron/reactotron";

SplashScreen.preventAutoHideAsync();

const Root = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Medium": require("themes/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("themes/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  useReactotron();

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Root;
