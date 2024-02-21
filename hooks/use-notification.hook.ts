import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

export type PushNotificationState = {
  expoPushToken: Notifications.ExpoPushToken | null;
  notification: Notifications.Notification | null;
};

export const useNotification = (): PushNotificationState => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const [state, setState] = useState<PushNotificationState>({
    expoPushToken: null,
    notification: null,
  });

  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        console.log("Failed to get push token for push notification!");
        return;
      }

      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas.projectId,
      });
    } else {
      console.log("Must use physical device for Push Notifications");
      return;
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setState((prevState) => ({
        ...prevState,
        expoPushToken: token || null,
      }));

      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setState((prevState) => ({
            ...prevState,
            notification: notification,
          }));
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return state;
};
