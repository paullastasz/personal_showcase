
import {  useState } from 'react';
import '../assets/css/font.css';
import { useTranslation } from "react-i18next";
import { EN_LANG,  LANG_STORAGE_KEY, PL_LANG,} from '../config/constants';
import type { Language } from '../types/language';
import { getLocale } from '../utils/getLocale';
import { useNavigate } from 'react-router-dom';

function LanguageSwitcher() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const [isHidden, setHidden] = useState(true);
  const [currentLan, setCurrentLan] = useState(getLocale(i18n.language).NORMALIZED_LAN); 
  const navigate = useNavigate();
 
  const handleDroplist = (): void => {
      setHidden(!isHidden);
  }
 
  const handleLangChangeBySwitcher = (lang: Language): void => {
      i18n.changeLanguage(lang.LANG_CODE);
      sessionStorage.setItem(LANG_STORAGE_KEY, lang.LANG_CODE);

      navigate(`/${lang.LANG_CODE}`);

      setCurrentLan(lang.NORMALIZED_LAN);
      setHidden(!isHidden);
  }

  return (
    <div className='relative inline-block mt-20 mr-5 text-center text-2xl sm:mt-10 sm:mr-10 sm:w-50 w-30 z-10'>
    <button onClick={handleDroplist} 
            aria-label={t("choose_lan")}
            aria-expanded={!isHidden}
            aria-haspopup="true"
            className={`menu-option w-full p-3 sm:p-2 ${isHidden ? "" : "bg-[var(--dark-color)]"}`}>{currentLan}
   </button>
    <div className={`absolute left-0 top-full w-full overflow-hidden bg-[var(--light-color)]/12 shadow-xs backdrop-blur-md ${isHidden ? "hidden" : ""}`}>
        <ul>
            <li><button onClick={() => handleLangChangeBySwitcher(PL_LANG)} 
                        className='menu-option block w-full p-3 sm:p-2 hover:bg-[var(--dark-color)]'>PL</button></li>
            <li><button onClick={() => handleLangChangeBySwitcher(EN_LANG)} 
                        className='menu-option block w-full p-3 sm:p-2 hover:bg-[var(--dark-color)]'>EN</button></li>
        </ul>
    </div>
    </div>
  )
}

export default LanguageSwitcher