import { useEffect } from "react";
import { NativeModules } from "react-native";
import Tron from "reactotron-react-native";

const attachConsoleTron = () => {
  if (__DEV__) console.tron = Tron;
};

export const useReactotron = () => {
  attachConsoleTron();

  const configureAndConnect = () => {
    if (!__DEV__) return;

    const scriptURL = NativeModules.SourceCode.scriptURL;
    const hostName = scriptURL.split("://")[1].split(":")[0];

    Tron.configure({
      name: require("../../app.json").displayName,
      host: hostName,
    })
      .useReactNative({
        networking: {
          ignoreUrls: /\/(symbolicate|generate_204)/,
        },
      })
      .connect()
      .onCustomCommand({
        title: "Go Back",
        description: "Goes back",
        command: "goBack",
        handler: () => {
          console.tron.log("Going back");
        },
      });
  };

  useEffect(() => {
    configureAndConnect();
  }, []);
};
