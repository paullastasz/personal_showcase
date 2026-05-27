import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function EducationSection() {
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
                navigate('/#education');
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
    <section ref={sectionRef} id="education" className='h-full  lg:h-screen flex flex-col items-center justify-between'>
      <h2 className="text-[4rem] sm:text-[5rem] 2xl:text-[7rem] babylonica-r text-shadow-xs/70 pt-8">{t("education")}</h2>
      <ul className='flex flex-col gap-5  max-md:ml-6 max-md:mr-6 sm:text-base'>
        <li className='flex flex-row h-30 2xl:h-40'>
          <div className='flex flex-col items-center mr-5'>
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-0.5 h-full bg-white"></div>
          </div>
          <div className='mt-2 text-[10px] sm:text-sm 2xl:text-lg'>
            <p className='text-xl 2xl:text-4xl font-bold not-italic'>{t("pw")}</p>
            <p >{t("master_studies")}</p>
            <p>{t("master_computer_science")}</p>
            <time className='italic opacity-70'>{t("pw_date")}</time>
          </div>
        </li>
        <li className='flex flex-row h-30 2xl:h-40'>
          <div className='flex flex-col items-center mr-5'>
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-0.5 h-full bg-white"></div>
          </div>
          <div className='mt-2 text-[10px] sm:text-sm 2xl:text-lg'>
            <p className='text-xl 2xl:text-4xl font-bold not-italic'>{t("pb")}</p>
            <p>{t("engineering_studies")}</p>
            <p>{t("engineering_computer_science")}</p>
            <time className='italic opacity-70'>{t("pb_date")}</time>
          </div>
        </li>
        <li className='flex flex-row h-31 2xl:h-40'>
          <div className='flex flex-col items-center mr-5'>
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-0.5 h-full bg-white"></div>
          </div>
          <div className='mt-2 text-[10px] sm:text-sm 2xl:text-lg'>
            <p className='text-xl 2xl:text-4xl font-bold not-italic'>{t("high_school")}</p>
            <p>{t("profile")}</p>
            <time className='italic opacity-70'>{t("high_school_date")}</time>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default EducationSection
