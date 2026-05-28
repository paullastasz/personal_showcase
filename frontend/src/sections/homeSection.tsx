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
    <section ref={sectionRef} id="home" className='h-full min-h-screen lg:h-screen grid grid:cols-2 grid:rows-2 sm:gap-y-5 md:gap-y-5 lg:gap-y-8 xl:gap-y-10 2xl:gap-y-5'>
        <div className="flex flex-col items-end">
          <LanguageSwitcher/>
        </div>
        <div className="flex flex-col items-center animation-show-up max-lg:gap-y-10 max-lg:mb-10">
          <Name name="Paulina" last_name="Staszewska"/>
          <Nav></Nav>
        </div>
    </section>
  )
}

export default HomeSection
