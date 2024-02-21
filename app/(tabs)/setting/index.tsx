import { SafeAreaView, ScrollView, useSx } from "dripsy";
import { Platform } from "react-native";
import React from "react";

import { InlineMenu } from "components";
import { authStore, defaultAuthStore } from "stores/auth-store";
import { SxStyles } from "themes/types";
import { heightScale, widthScale } from "utils/scale";
import reset from "stores/helpers/reset";
import { useTranslation } from "react-i18next";

const SettingScreen = () => {
  const sx = useSx();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={sx(styles.settingsWrapper)}>
      <ScrollView contentContainerSx={styles.settingsScroll}>
        <InlineMenu icon="person-circle" title={t("My details")} />
        <InlineMenu icon="notifications" title={"Notifications"} />
        <InlineMenu icon="apps" title={"Connected apps"} />
        <InlineMenu
          icon="exit-outline"
          title={"Sign out"}
          destructive
          onPress={() => reset(authStore.state, defaultAuthStore)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles: SxStyles = {
  background: () => ({
    flex: 1,
    backgroundColor: "palette.brandMid",
  }),
  backgroundImage: () => ({
    width: "100%",
    height: "83%",
    resizeMode: "cover",
  }),
  settingsWrapper: (theme) => ({
    flex: 1,
    backgroundColor: "background",
    boxShadow: "md",
    borderTopLeftRadius: theme.radius.large,
    borderTopRightRadius: theme.radius.large,
    pb: Platform.select({
      ios: heightScale(theme.space.rgAlt),
      android: heightScale(theme.space.md),
    }),
  }),
  settingsScroll: (theme) => ({
    pt: heightScale(theme.space.rgAlt),
    px: widthScale(theme.space.rg),
  }),
  footer: (theme) => ({
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "borderLight",
    borderRadius: theme.radius.small,
    py: heightScale(theme.space.xs),
    px: heightScale(theme.space.rg),
    mt: heightScale(theme.space.xs),
  }),
};

export default SettingScreen;
