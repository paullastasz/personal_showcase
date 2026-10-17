import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_US from "./locales/en-US/resources.json";
import pl_PL from "./locales/pl-PL/resources.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    supportedLngs: ["pl-PL", "en-US"],

    fallbackLng: "en-US",

    load: "currentOnly",

    resources: {
      "pl-PL": {
        translation: pl_PL,
      },
      "en-US": {
        translation: en_US,
      },
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "lang",
      caches: [],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;