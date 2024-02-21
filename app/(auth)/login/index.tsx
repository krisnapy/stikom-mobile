import React, { Fragment, FunctionComponent } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, useSx } from "dripsy";
import { ImageBackground } from "react-native";
import { FormProvider } from "react-hook-form";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import * as WebBrowser from "expo-web-browser";

import { loginBg } from "themes/images";
import { theme } from "themes";
import { heightScale, widthScale } from "utils/scale";
import { ControlledInput, ControlledButton, Button } from "components";
import { useKeyboardVisible } from "hooks/use-keyboard-visible.hook";

import { styles } from "./styles";
import useLogin from "./login.hook";

type Props = NativeStackScreenProps<any, "Login">;

WebBrowser.maybeCompleteAuthSession();

const LoginScreen: FunctionComponent<Props> = () => {
  const { isKeyboardVisible } = useKeyboardVisible();
  const sx = useSx();

  const { t } = useTranslation("auth");

  const { methods, onSubmit } = useLogin();

  return (
    <Fragment>
      <ImageBackground
        source={loginBg}
        style={sx(styles.background)}
        imageStyle={sx(styles.backgroundImage)}
      >
        <View sx={sx(styles.headerWrapper)}>
          <Text sx={sx(styles.headerText)}>
            {t("Welcome back you’ve been missed!")}
          </Text>
        </View>

        <View
          style={[
            sx(styles.settingsWrapper),
            {
              bottom: 0,
              marginBottom: isKeyboardVisible ? -heightScale(20) : 0,
            },
          ]}
        >
          <View sx={sx(styles.textWrapper)}>
            <Text sx={sx(styles.textTitle)}>{t("Welcome Back")}</Text>
            <Text sx={sx(styles.textSubtitle)}>
              {t("Sign in to continue learning")}
            </Text>
          </View>

          <FormProvider {...methods}>
            <View sx={sx(styles.formWrapper)}>
              <ControlledInput
                name="username"
                placeholder={t("Username")}
                label={t("Username")}
              />
              <ControlledInput
                name="password"
                placeholder={t("Password")}
                label={t("Password")}
                secureTextEntry
              />
              <Link href="/" style={sx(styles.forgotPassword)}>
                {t("Forgot Password?")}
              </Link>

              <ControlledButton label={t("Login")} onPress={onSubmit} />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: heightScale(theme.space.md),
                }}
              >
                <View sx={styles.divider} />
                <Text
                  style={[
                    sx(styles.textSubtitle),
                    { marginHorizontal: widthScale(theme.space.sm) },
                  ]}
                >
                  {t("Or sign in with")}
                </Text>
                <View sx={styles.divider} />
              </View>

              <Button
                label={t("Sign in with Microsoft")}
                icon="logo-microsoft"
                outlined
              />
            </View>
          </FormProvider>
        </View>
      </ImageBackground>
    </Fragment>
  );
};

export default LoginScreen;
