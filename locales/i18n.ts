import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

import "intl-pluralrules";
import en from "./en";
import id from "./id";

i18n.use(initReactI18next).init({
  resources: { en, id },
  ns: ["common"],
  lng: getLocales().map((locale) => locale.languageTag)[0] || "en",
  defaultNS: "common",
  fallbackNS: "common",
  parseMissingKeyHandler: (key) =>
    __DEV__ ? `missing_translation: ${key}` : key,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
