import { DEFAULT_LANG, EN_LANG, EN_US_LANG, PL_LANG, PL_PL_LANG, } from "../config/constants";
import type { Language } from "../types/language";

export function getLocale(language: string): Language {
  if (language === PL_LANG.LANG_CODE || language === PL_PL_LANG.LANG_CODE) {
    return PL_LANG;
  }

  if (language === EN_LANG.LANG_CODE || language === EN_US_LANG.LANG_CODE) {
    return EN_LANG;
  }

  return DEFAULT_LANG;
}