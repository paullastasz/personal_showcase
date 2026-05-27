import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ExperienceSection() {
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
              navigate('/#experience');
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
    <section ref={sectionRef} id="experience" className='h-full  lg:h-screen bg-white text-black flex flex-col items-center justify-between'>
      <h2 className="text-[3rem] sm:text-[6rem] 2xl:text-[7rem] babylonica-r text-shadow-xs/70 p-12 sm:p-8">{t("experience")}</h2>
      <ul className='flex flex-col gap-5'>
        <li className='flex flex-row h-130 md:h-70'>
          <div className='flex flex-col items-center mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='mt-2 text-lg'>
            <p className='text-3xl 2xl:text-6xl font-bold not-italic'>KAN Sp. z o.o.</p>
            <p className='text-xl 2xl:text-3xl not-italic'>{t("intership")}</p>
            <time className='italic opacity-70'>{t("intership_date")}</time>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default ExperienceSection
