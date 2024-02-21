import { RootNavigatorParamList } from "navigation/types/root-navigator.types";
import { MainStackNavigatorParamList } from "navigation/types/stack-navigator.types";

type NavigationParamList = Omit<RootNavigatorParamList, "MainStackNavigator"> &
  MainStackNavigatorParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParamList {}
  }
}
