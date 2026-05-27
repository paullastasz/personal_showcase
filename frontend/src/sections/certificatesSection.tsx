import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function CertificatesSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry) => {
              if (entry.isIntersecting === true && entry.intersectionRatio >= 0.5)
              {  
                navigate('/#certificates');
              }
            })
          );
  
        observer.observe(sectionRef.current!);
        return () => {
          observer.disconnect();
        };
    }, 500); 

    return () => clearInterval(interval);

    }, []);

  return (
    <section ref={sectionRef} id="certificates" className='h-screen flex flex-col items-center justify-between'>
      <h2 className="text-[5.0rem] sm:text-[6.5rem] 2xl:text-[7rem] babylonica-r text-shadow-xs/70 p-8">{t("certificates")}</h2>
      <ul className='flex flex-col gap-5'>
        <li className='flex flex-row h-130  sm:h-90 2xl:h-100'>
          <div className='flex flex-col items-center mr-5'>
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-0.5 h-full bg-white"></div>
          </div>
          <div className='flex flex-col gap-2 mt-2 text-lg'>
            <p className='text-2xl 2xl:text-4xl font-bold not-italic'>ACERT (SERMO)</p>
            <p className='text-lg 2xl:text-xl not-italic'>{t("acert_title")}</p>
            <p className='2xl:text-lg not-italic'>{t("acert_description")}</p>
            <time className='italic opacity-70'>{t("acert_date")}</time>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default CertificatesSection
