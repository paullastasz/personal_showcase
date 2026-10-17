import { useEffect, useRef } from "react";
import LanguageSwitcher from "../components/languageSwitcher";
import Name from "../components/name";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";


function HomeSection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
      const interval = setInterval(() => {
          const observer = new IntersectionObserver((entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting === true && entry.intersectionRatio >= 0.5)
            {  
              navigate('/');
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
    <section ref={sectionRef} id="home" aria-label="Home" className='h-screen lg:h-screen grid grid:cols-2 grid:rows-2 sm:gap-y-5 md:gap-y-5 lg:gap-y-8 xl:gap-y-10 2xl:gap-y-5'>
      <video  autoPlay 
              muted
              loop
              playsInline
              aria-hidden="true"
              preload="metadata"
              className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none saturate-50">
          <source
            src="/videos/7794279-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40 pointer-events-none" />
      <div className="flex flex-col items-end">
        <LanguageSwitcher/>
      </div>
      <div className="flex flex-col items-center animation-show-up">
        <Name name="Paulina" last_name="Staszewska"/>
        <Nav></Nav>
      </div>
    </section>
  )
}

export default HomeSection
