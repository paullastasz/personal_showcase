import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_US from "./locales/en-US/resources.json";
import pl_PL from "./locales/pl-PL/resources.json";
import { LANG_STORAGE_KEY } from "./config/constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    supportedLngs: ["pl", "pl-PL", "en", "en-US"],

    fallbackLng: "en-US",

    load: "currentOnly",

    resources: {
      "pl": { translation: pl_PL },
      "pl-PL": {
        translation: pl_PL,
      },
      "en": { translation: en_US },
      "en-US": {
        translation: en_US,
      },
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: LANG_STORAGE_KEY,
      caches: [],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;