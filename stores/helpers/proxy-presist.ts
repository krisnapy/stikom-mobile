import { proxy, subscribe } from "valtio";

import { load, save } from "utils/storage";

export const proxyWithPersist = <T extends Record<string, any>>(
  initialState: T,
  key: string
) => {
  const data = load<T>(key);
  const state = proxy<T>(data || initialState);

  subscribe(state, () => {
    save(key, state);
  });

  return state;
};
