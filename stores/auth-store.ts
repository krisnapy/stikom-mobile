import { proxy } from "valtio";

import { User } from "./user.types";
import { computeAuthStore } from "./auth-store.compute";
import { proxyWithPersist } from "./helpers/proxy-presist";

export type AuthStore = {
  token: string;
  user: User | null;
  isAuthenticated: boolean;
};

export const defaultAuthStore: AuthStore = {
  user: null,
  token: "",
  isAuthenticated: false,
};

const initialAuthStore = proxyWithPersist(defaultAuthStore, "auth");

export const authStore = proxy({
  state: initialAuthStore,
  computed: computeAuthStore(initialAuthStore),
});
