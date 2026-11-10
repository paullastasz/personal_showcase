import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePage from "./homePage";
import { useTranslation } from "react-i18next";
import { getLocale } from "../utils/getLocale";
import { EN_LANG, PL_LANG } from "../config/constants";

function LanguagePage() {
  const { lang } = useParams();
  const {  i18n } = useTranslation();

  useEffect(() => {

    const systemLang = getLocale(i18n.resolvedLanguage ?? i18n.language).LANG_CODE;
    let codeLang = lang;
    
    if (!codeLang || (lang !== PL_LANG.LANG_CODE && lang !== EN_LANG.LANG_CODE))
    {
        codeLang = systemLang;
    }

    const currentLang = window.location.pathname.split('/')[1];

    const targetUrl = `/${codeLang}/${window.location.search}${window.location.hash}`;

    if (currentLang !== codeLang) {
      window.location.href = targetUrl;
    }

    if(codeLang !== systemLang)
    {
      i18n.changeLanguage(codeLang);
    }
    
  }, []);

  useEffect(() => {
    let attempts = 0;
    let frameId: number;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (attempts < 60) {
        attempts++;
        frameId = requestAnimationFrame(scrollToHash);
      }
    };

    frameId = requestAnimationFrame(scrollToHash);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <HomePage />;
}

export default LanguagePage;