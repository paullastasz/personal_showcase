
import { useEffect, useState } from 'react';
import '../assets/css/font.css';
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const [isHidden, setHidden] = useState(true);
  const [currentLan, setCurrentLan] = useState("");

  useEffect(() => {
      const currentLang = localStorage.getItem("lang"); 
      const systemLang = i18n.language;

      // after refreshing the page
      if (currentLang != null)
      {
         
         setCurrentLan(currentLang.split("-")[0] === "pl" ? "PL" : "EN (US)");
         console.log(i18n.language);
         i18n.changeLanguage(currentLang.split("-")[0] === "pl" ? "pl-PL" : "en-US");
      }
      // first entry at all
      else
      {
         localStorage.setItem("lang", systemLang.split("-")[0] === "pl" ? "pl-PL" : "en-US");
      }

      const lang = document.getElementById("lang");

     if (lang !== null)
     {   
        lang.lang = systemLang;
     }
      
  
   }, []);


  const handleDroplist = (): void => {
      setHidden(!isHidden);
  }

  const handlePl = (): void => {
     const plCode = "pl-PL";
     i18n.changeLanguage(plCode);
     const lang = document.getElementById("lang");

     if (lang !== null)
     {   
        lang.lang = plCode;
     }

     setCurrentLan("PL");
     localStorage.setItem("lang", plCode);
     setHidden(!isHidden);
  }

  const handleEnUs = (): void => {
     const enCode = "en-US";
     i18n.changeLanguage(enCode);
     const lang = document.getElementById("lang");
     localStorage.setItem("lang", "EN (US)");
     if (lang !== null)
     {   
        lang.lang = enCode;
     }
     setCurrentLan("EN (US)");
     localStorage.setItem("lang", enCode);
     setHidden(!isHidden);
  }

  return (
    <div className='w-50 h-full inline-block text-2xl text-center mt-20 md:mt-10 max-md:mr-[-20px]'>
    <button onClick={handleDroplist} className='cursor-pointer hover:text-yellow-100 hover:animate-pulse p-2'>{currentLan}</button>
    <div className={isHidden ? 'hidden' : 'absolute bg-[var(--light-color)] shadow-xs min-w-50 z-1 rounded-md'}>
        <ul>
            <li><button onClick={handlePl} 
                        className='cursor-pointer w-full h-full hover:bg-[var(--dark-color)] p-2'>PL</button></li>
            <li><button onClick={handleEnUs} 
                        className='cursor-pointer w-full h-full hover:bg-[var(--dark-color)] p-2'>EN (US)</button></li>
        </ul>
    </div>
    </div>
  )
}

export default LanguageSwitcher