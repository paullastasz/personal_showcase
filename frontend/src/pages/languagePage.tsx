import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HomePage from "./homePage";
import { useTranslation } from "react-i18next";
import { getLocale } from "../utils/getLocale";
import { EN_LANG, PL_LANG } from "../config/constants";
import { updateDocumentElements } from "../utils/updateDocumentElements";

function LanguagePage() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    let codeLang = lang;

    if (!codeLang || (lang !== PL_LANG.LANG_CODE && lang !== EN_LANG.LANG_CODE))
    {
        codeLang = getLocale(i18n.language).LANG_CODE;
    }

    navigate(`/${codeLang}`);

    i18n.changeLanguage(codeLang);

    updateDocumentElements(
        codeLang,
        t("meta_title"),
        t("meta_description"),
        codeLang,
        t("og_image")
    );
    
  }, []);

  return <HomePage />;
}

export default LanguagePage;