
import { useEffect, useState } from 'react';
import '../assets/css/font.css'
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const [isHidden, setHidden] = useState(true);
  const [currentLan, setCurrentLan] = useState("EN (US)");

  useEffect(() => {
      const lang = localStorage.getItem("lang");
      if (lang != null)
      {
         setCurrentLan(lang);
         i18n.changeLanguage("PL" === lang ? "pl" : "en_us");
      }   
  
   }, []);


  const handleDroplist = (): void => {
      setHidden(!isHidden);
  }

  const handlePl = (): void => {
     i18n.changeLanguage("pl");
     const lang = document.getElementById("lang");
     localStorage.setItem("lang", "PL");
     if (lang !== null)
     {   
        lang.lang = "pl";
     }
     setCurrentLan("PL");
     setHidden(!isHidden);
  }

  const handleEnUs = (): void => {
     i18n.changeLanguage("en_us");
     const lang = document.getElementById("lang");
     localStorage.setItem("lang", "EN (US)");
     if (lang !== null)
     {   
        lang.lang = "en-US";
     }
     setCurrentLan("EN (US)");
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