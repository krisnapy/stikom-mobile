import { authStore } from "stores/auth-store";
import { DripsyProvider } from "dripsy";
import { useSegments, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { theme } from "themes";

type AuthProviderProps = { children: JSX.Element };

const useProtectedRoute = (isAuthentication: boolean) => {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthentication && !inAuthGroup) {
      router.replace("/login");
    } else if (isAuthentication && inAuthGroup) {
      router.replace("/");
    }
  }, [isAuthentication, segments]);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const { isAuthenticated } = useSnapshot(authStore.computed);
  useProtectedRoute(isAuthenticated);

  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
};
