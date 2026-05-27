import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


function ContactSection() {
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
                navigate('/#contact');
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
    <section ref={sectionRef} id="contact" className='h-screen flex flex-col justify-center items-center'>
      <h2 className="text-[4rem] sm:text-[5rem] 2xl:text-[7rem] babylonica-r text-shadow-xs/70">{t("contact")}</h2>
      <div className='h-0.5 w-[98dvw] bg-white'></div>
      <ul className='grid max-lg:grid-rows-3 lg:grid-cols-3 place-items-centre mt-[20px] md:mt-20 xl:mt-15 max-lg:gap-y-7'>
        <li className='flex flex-col items-center justify-content-center gap-y-3'>
          <div className='flex flex-row gap-x-5'>
              <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "rgb(255, 255, 255)",}} />
              <p className='text-2xl  lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold not-italic'>LinkedIn</p>
          </div>
          <div className='flex flex-row'>
            <p className='2xl:text-lg italic text-[#B3B1B4] hover:text-white'>
              <a href="https://www.linkedin.com/in/paulina-staszewska-ba4ba3309" target="_blank" rel="noopener noreferrer" className='hover:animate-pulse'>{t("see_profile")}</a>
            </p>
          </div>
        </li>
        <li className='flex flex-col items-center justify-content-center gap-y-3'>
          <div className='flex flex-row gap-x-5'>
              <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "rgb(255, 255, 255)",}} />
              <p className='text-2xl  lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold not-italic'>GitHub</p>
          </div>
          <div className='flex flex-row'>
            <p className='2xl:text-lg italic text-[#B3B1B4] hover:text-white'>
              <a href="https://github.com/paullastasz" target="_blank" rel="noopener noreferrer" className='hover:animate-pulse'>{t("see_projects")}</a>
            </p>
          </div>
        </li>
        <li className='flex flex-col items-center justify-content-center gap-y-3'>
          <div className='flex flex-row gap-x-5'>
              <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "rgb(255, 255, 255)",}} />
              <p className='text-2xl  lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold not-italic'>{t("email")}</p>
          </div>
          <div className='flex flex-row'>
            <p className='2xl:text-lg italic opacity-70'>paulinastasz02@gmail.com</p>
          </div>
        </li>
      </ul> 
    </section>
  )
}

export default ContactSection
