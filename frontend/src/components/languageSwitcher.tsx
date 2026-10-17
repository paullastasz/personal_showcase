
import { useEffect, useState } from 'react';
import '../assets/css/font.css';
import { useTranslation } from "react-i18next";
import { LANG_STORAGE_KEY } from '../config/constants';

function LanguageSwitcher() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const [isHidden, setHidden] = useState(true);
  const [currentLan, setCurrentLan] = useState("");
 
  useEffect(() => {
      const currentLang = localStorage.getItem(LANG_STORAGE_KEY); 
      const systemLang = i18n.language;
      const meta_description = document.getElementById("meta_description");
 
      if (currentLang != null)
      {
         setCurrentLan(currentLang.split("-")[0] === "pl" ? "PL" : "EN");
         i18n.changeLanguage(currentLang.split("-")[0] === "pl" ? "pl-PL" : "en-US");
      }

      else
      {
         setCurrentLan(systemLang.split("-")[0] === "pl" ? "PL" : "EN");
      }
 
      const lang = document.getElementById("lang");
 
     if (lang !== null)
     {   
        lang.lang = systemLang;
     }
 
     meta_description?.setAttribute(
      "content",
      t("meta_description")
     );
   }, []);
 
 
  const handleDroplist = (): void => {
      setHidden(!isHidden);
  }
 
  const handlePl = (): void => {
     const plCode = "pl-PL";
     i18n.changeLanguage(plCode);
     const lang = document.getElementById(LANG_STORAGE_KEY);
     const meta_description = document.getElementById("meta_description");
 
     if (lang !== null)
     {   
        lang.lang = plCode;
     }
 
     meta_description?.setAttribute(
      "content",
      t("meta_description")
     );
 
     setCurrentLan("PL");

     localStorage.setItem(LANG_STORAGE_KEY, plCode);
     setHidden(!isHidden);
  }
 
  const handleEnUs = (): void => {
     const enCode = "en-US";
     i18n.changeLanguage(enCode);
     const lang = document.getElementById("lang");
     const meta_description = document.getElementById("meta_description");
 
     if (lang !== null)
     {   
        lang.lang = enCode;
     }
 
     setCurrentLan("EN");
     localStorage.setItem(LANG_STORAGE_KEY, enCode);
     setHidden(!isHidden);
 
     meta_description?.setAttribute(
      "content",
      t("meta_description")
     );
  }

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
            <li><button onClick={handlePl} 
                        className='menu-option block w-full cursor-pointer p-2 hover:bg-[var(--dark-color)]'>PL</button></li>
            <li><button onClick={handleEnUs} 
                        className='menu-option block w-full cursor-pointer p-2 hover:bg-[var(--dark-color)]'>EN</button></li>
        </ul>
    </div>
    </div>
  )
}

export default LanguageSwitcher