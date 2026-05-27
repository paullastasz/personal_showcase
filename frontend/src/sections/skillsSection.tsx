import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SkillsSection() {
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
                navigate('/#skills');
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
    <section ref={sectionRef} id="skills" className='h-full bg-white text-black flex flex-col items-center justify-between'>
      <h2 className="text-[4rem] sm:text-[6rem] lg:text-[5rem] 2xl:text-[7rem] babylonica-r text-shadow-xs/70 p-2">{t("skills")}</h2>
      <ul className='grid grid-cols-3 gap-1 ml-[2vw] md:ml-[6vw]'>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("programming_languages")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>C, C++, C#, JavaScript, TypeScript, Python</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>Desktop frontend</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>C# (WPF)</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>Web frontend</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>JavaScript, TypeScript, CSS, Tailwind CSS, HTML5, React</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("orm")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>C# (Entity Framework, Entity Framework Core)</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("db")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>SQL (PostgreSQL, Oracle Database, Microsoft SQL Server), NoSQL (Firebase Realtime Database)</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("api")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>REST API, WebSocket</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("game_engines")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>Unreal Engine</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("testing")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>{t("unit_tests")}</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("format")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>JSON, XML</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("operating_systems")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'> Linux, Windows</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("vcs")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>Git (GitHub, GitLab, Bitbucket)</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("tools_ides_platforms")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>Docker, Vite, Jira, Visual Studio, Postman</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("patterns")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>{t("patterns_content")}</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("designing")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>UML</p>
          </div>
        </li>
        <li className='flex flex-row h-32 md:h-30 2xl:h-27'>
          <div className='flex flex-col items-center mr-1 sm:mr-5'>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-0.5 h-full bg-black"></div>
          </div>
          <div className='flex flex-col 2xl:mt-2 gap-2'>
            <p className='text-[12px] md:text-md md:text-lg 2xl:text-lg font-bold not-italic'>{t("others")}</p>
            <p className='text-[10px] md:text-sm 2xl:text-lg  italic opacity-70'>Scrum, Clean Code</p>
          </div>
        </li>
      </ul> 
    </section>
  )
}

export default SkillsSection
