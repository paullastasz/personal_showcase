
import { useEffect, useState } from 'react';
import '../assets/css/font.css';
import { useTranslation } from "react-i18next";
import { DEFAULT_LANG, EN_LANG_CODE, EN_US_LANG_CODE, LANG_STORAGE_KEY, PL_LANG_CODE, PL_PL_LANG_CODE } from '../config/constants';

function LanguageSwitcher() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const [isHidden, setHidden] = useState(true);
  const [currentLan, setCurrentLan] = useState("");

  const handleLangChange = (lang: string): void => {
      const langHtmlElement = document.getElementById("lang");

      switch (lang) {
            case PL_LANG_CODE || PL_PL_LANG_CODE || EN_LANG_CODE || EN_US_LANG_CODE:
               setCurrentLan(lang.toUpperCase());
               if (langHtmlElement !== null) langHtmlElement.lang = lang;
               setCurrentLan(lang.toUpperCase());
               break;
            default:
               setCurrentLan(DEFAULT_LANG.toUpperCase());
               if (langHtmlElement !== null) langHtmlElement.lang = DEFAULT_LANG;
               setCurrentLan(DEFAULT_LANG.toUpperCase()); 
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
 
  const handleLangChangeBySwitcher = (code: string): void => {
     i18n.changeLanguage(code);
     localStorage.setItem(LANG_STORAGE_KEY, code);
 
     handleLangChange(code);

     setHidden(!isHidden);
  }

   useEffect(() => {
      const systemLang = i18n.language;
      
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
            <li><button onClick={() => handleLangChangeBySwitcher(PL_LANG_CODE)} 
                        className='menu-option block w-full cursor-pointer p-2 hover:bg-[var(--dark-color)]'>PL</button></li>
            <li><button onClick={() => handleLangChangeBySwitcher(EN_LANG_CODE)} 
                        className='menu-option block w-full cursor-pointer p-2 hover:bg-[var(--dark-color)]'>EN</button></li>
        </ul>
    </div>
    </div>
  )
}

export default LanguageSwitcher