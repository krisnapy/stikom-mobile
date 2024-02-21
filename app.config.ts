import { ExpoConfig, ConfigContext } from "expo/config";

module.exports = ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    extra: {
      eas: {
        projectId: "8d5d2e70-2698-446c-a7b7-d94b738412d4",
      },
    },
    android: {
      intentFilters: [
        {
          autoVerify: true,
          action: "VIEW",
          data: [{ scheme: "msauth" }],
          category: ["BROWSABLE", "DEFAULT"],
        },
      ],
      package: "com.stikom.mobile",
      googleServicesFile: "./google-services.json",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#1A91FF",
      },
    },
    ios: {
      icon: "./assets/icon.png",
      bundleIdentifier: "com.stikom.mobile",
    },
    web: {
      config: {
        firebase: {
          projectId: "stikom-mobile",
          apiKey: "AIzaSyB2436gv_7Nm8lPlWljeSk-GlFx62VDXwU",
          measurementId: "G-Z8CDK9XG3M",
        },
      },
    },
    name: "Stikom Mobile",
    slug: "stikom-mobile",
  };
};
