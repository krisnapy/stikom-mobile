import dayjs from "dayjs";
import { derive } from "valtio/utils";
import { AuthStore } from "./auth-store";

export const computeAuthStore = (state: AuthStore) =>
  derive({
    isAuthenticated: (get) => !!get(state).token,
  });
