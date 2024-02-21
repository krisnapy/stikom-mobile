import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: "global-storage",
});

export function loadString(key: string): string | null {
  try {
    return storage.getString(key) || null;
  } catch {
    return null;
  }
}

export function saveString(key: string, value: string): boolean {
  try {
    storage.set(key, value);
    return true;
  } catch {
    return false;
  }
}

export function load<T extends Record<string, any>>(key: string): T | null {
  try {
    const data = storage.getString(key);
    if (data) return JSON.parse(data);
    return null;
  } catch {
    return null;
  }
}

export function save<T extends Record<string, any>>(
  key: string,
  value: T
): boolean {
  try {
    const data = JSON.stringify(value);
    storage.set(key, data);
    return true;
  } catch {
    return false;
  }
}

export function remove(key: string): void {
  storage.delete(key);
}

export function clear(): void {
  storage.clearAll();
}

export function keys(): string[] {
  return storage.getAllKeys();
}
