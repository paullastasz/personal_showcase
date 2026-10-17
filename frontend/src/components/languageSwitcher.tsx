
import { useEffect, useState } from 'react';
import '../assets/css/font.css';
import { useTranslation } from "react-i18next";
import { DEFAULT_LANG, EN_LANG, EN_US_LANG, LANG_STORAGE_KEY, PL_LANG, PL_PL_LANG, } from '../config/constants';
import type { Language } from '../types/language';

function LanguageSwitcher() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const [isHidden, setHidden] = useState(true);
  const [currentLan, setCurrentLan] = useState("");

  const handleLangChange = (lang: Language): void => {
      const langHtmlElement = document.getElementById("lang");

      switch (lang.LANG_CODE) {
         case PL_LANG.LANG_CODE:
         case PL_PL_LANG.LANG_CODE:
         case EN_LANG.LANG_CODE:
         case EN_US_LANG.LANG_CODE:
            setCurrentLan(lang.NORMALIZED_LAN);
            if (langHtmlElement !== null) {
                  langHtmlElement.lang = lang.LANG_CODE;
            }
            break;

         default:
            setCurrentLan(DEFAULT_LANG.NORMALIZED_LAN);
            if (langHtmlElement !== null) {
                  langHtmlElement.lang = DEFAULT_LANG.LANG_CODE;
            }
            break;
      }

      const meta_description = document.getElementById("meta_description");

      meta_description?.setAttribute(
      "content",
      t("meta_description")
     );
  }
 
 
  const handleDroplist = (): void => {
      setHidden(!isHidden);
  }
 
  const handleLangChangeBySwitcher = (lang: Language): void => {
     i18n.changeLanguage(lang.LANG_CODE);
     localStorage.setItem(LANG_STORAGE_KEY, lang.LANG_CODE);
 
     handleLangChange(lang);

     setHidden(!isHidden);
  }

   useEffect(() => {
      const systemLang: Language = i18n.language === PL_LANG.LANG_CODE || i18n.language === PL_PL_LANG.LANG_CODE ? 
                        PL_LANG : 
                        (i18n.language === EN_LANG.LANG_CODE || i18n.language === EN_US_LANG.LANG_CODE ? 
                           EN_LANG : 
                              DEFAULT_LANG);
      
      handleLangChange(systemLang);

   }, []);

  return (
    <div className='relative inline-block mt-20 mr-5 text-center text-2xl sm:mt-10 sm:mr-10 sm:w-50 w-30'>
    <button onClick={handleDroplist} 
            aria-label={t("choose_lan")}
            aria-expanded={!isHidden}
            aria-haspopup="true"
            className={`menu-option w-full cursor-pointer p-2 ${isHidden ? "" : "bg-[var(--dark-color)]"}`}>{currentLan}
   </button>
    <div className={`absolute left-0 top-full z-10 w-full overflow-hidden bg-[var(--light-color)]/12 shadow-xs backdrop-blur-md ${isHidden ? "hidden" : ""}`}>
        <ul>
            <li><button onClick={() => handleLangChangeBySwitcher(PL_LANG)} 
                        className='menu-option block w-full cursor-pointer p-2 hover:bg-[var(--dark-color)]'>PL</button></li>
            <li><button onClick={() => handleLangChangeBySwitcher(EN_LANG)} 
                        className='menu-option block w-full cursor-pointer p-2 hover:bg-[var(--dark-color)]'>EN</button></li>
        </ul>
    </div>
    </div>
  )
}

export default LanguageSwitcher