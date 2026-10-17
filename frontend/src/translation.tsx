import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_US from "./locales/en-US/resources.json";
import pl_PL from "./locales/pl-PL/resources.json";
import { DEFAULT_LANG, EN_LANG, EN_US_LANG, LANG_STORAGE_KEY, PL_LANG, PL_PL_LANG } from "./config/constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    supportedLngs: [PL_LANG.LANG_CODE, PL_PL_LANG.LANG_CODE, EN_LANG.LANG_CODE, EN_US_LANG.LANG_CODE],

    fallbackLng: DEFAULT_LANG.LANG_CODE,

    load: "currentOnly",

    resources: {
      [PL_LANG.LANG_CODE]:    { translation: pl_PL },
      [PL_PL_LANG.LANG_CODE]: { translation: pl_PL },
      [EN_LANG.LANG_CODE]:    { translation: en_US },
      [EN_US_LANG.LANG_CODE]: { translation: en_US },
    },

    detection: {
      order: ["sessionStorage", "navigator", "htmlTag"],
      lookupLocalStorage: LANG_STORAGE_KEY,
      caches: [],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;