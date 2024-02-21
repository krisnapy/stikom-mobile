import Ionicons from "@expo/vector-icons/Ionicons";
import {
  FlatList,
  SafeAreaView,
  View,
  useSx,
  Text,
  Image,
  ScrollView,
} from "dripsy";
import { Dimensions, TouchableOpacity } from "react-native";
import React from "react";

import { Card, Input } from "components";
import { SxStyles } from "themes/types";
import { heightScale } from "utils/scale";
import { theme } from "themes";
import { useTranslation } from "react-i18next";
import { useSnapshot } from "valtio";
import { authStore } from "stores/auth-store";

const HomeScreen = () => {
  const sx = useSx();

  const { t } = useTranslation();

  const width = (Dimensions.get("window").width - theme.space.sm * 4) / 2;

  const { user } = useSnapshot(authStore.state);

  const data = [
    {
      title: "Today Course",
      data: Array.from({ length: 10 }).map((_, index) => ({
        title: `Mata Kuliah ${index + 1}`,
      })),
    },
    {
      title: "Overview Course",
      data: Array.from({ length: 10 }).map((_, index) => ({
        title: `Mata Kuliah ${index + 1}`,
      })),
    },
  ];

  return (
    <SafeAreaView style={sx(styles.container)}>
      <View sx={sx(styles.header)}>
        <View sx={sx(styles.profile)}>
          <View sx={sx(styles.user)}>
            <View sx={sx(styles.avatar)}>
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 999 }}
                source={{
                  uri: "https://placehold.co/600x400/8d9dac/FFF.png?text=KP",
                }}
              />
            </View>

            <View>
              <Text style={{ fontWeight: "700" }}>{t("Welcome")}</Text>
              <Text>{user?.fullName}</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Ionicons
              name="notifications"
              size={32}
              color={theme.colors.palette.brandDark}
            />
          </TouchableOpacity>
        </View>

        <Input placeholder={t("Search...")} />
      </View>

      <ScrollView horizontal={false} style={{ marginBottom: 260 }}>
        <Text style={[sx(styles.title), { padding: theme.space.md }]}>
          {t("Today Course")}
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data[0].data}
          ItemSeparatorComponent={() => (
            <View style={{ width: theme.space.md }} />
          )}
          contentContainerStyle={{ paddingHorizontal: theme.space.md }}
          renderItem={({ item }: any) => (
            <Card title={item.title} size="large" />
          )}
        />

        <View sx={sx(styles.courses)}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: theme.space.md,
              marginTop: theme.space.md,
            }}
          >
            <Text sx={sx(styles.title)}>{t("Course List")}</Text>

            <TouchableOpacity>
              <Ionicons size={30} name="list" />
            </TouchableOpacity>
          </View>

          <View sx={sx(styles.listOverview)}>
            {data[0].data.map(({ title }, index) => (
              <Card
                key={index}
                title={title}
                size="auto"
                style={Dimensions.get("window").width > 400 && { width }}
                type={
                  Dimensions.get("window").width > 400
                    ? "vertical"
                    : "horizontal"
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles: SxStyles = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: heightScale(theme.space.sm),
    backgroundColor: theme.colors.palette.greyExtraLight,
  }),
  header: (theme) => ({
    paddingHorizontal: theme.space.md,
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.space.xxl,
    gap: theme.space.sm,
    paddingBottom: theme.space.md,
    borderBottomStartRadius: theme.radius.large,
    borderBottomEndRadius: theme.radius.large,
    backgroundColor: theme.colors.palette.white,
    // ...theme.shadows.sm,
  }),
  profile: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.space.md,
  }),
  avatar: (theme) => ({
    width: theme.space["2xl"],
    height: theme.space["2xl"],
    borderRadius: 999,
    borderWidth: 2,
    borderColor: theme.colors.palette.brandPrimary,
    overflow: "hidden",
    padding: theme.space.xs,
  }),
  user: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.space.md,
  }),
  courses: (theme) => ({
    padding: theme.space.md,
  }),
  listOverview: (theme) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.space.sm,
  }),
  title: (theme) => ({
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
  }),
};

export default HomeScreen;
