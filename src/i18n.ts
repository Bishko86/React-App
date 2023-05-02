import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./i18n/en.json";
import uaTranslation from "./i18n/ua.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ua: {
      translation: uaTranslation,
    },
  },
  lng: "ua",
  fallbackLng: "en", // set the fallback language
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});
