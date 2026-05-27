import img_1 from "../assets/images/drawings/1.png";
import img_2 from "../assets/images/drawings/2.png";
import img_3 from "../assets/images/drawings/3.png";
import img_4 from "../assets/images/drawings/4.png";
import img_5 from "../assets/images/drawings/5.png";
import img_6 from "../assets/images/drawings/6.png";
import img_7 from "../assets/images/drawings/7.png";
import img_8 from "../assets/images/drawings/8.png";
import img_9 from "../assets/images/drawings/9.png";
import img_10 from "../assets/images/drawings/10.png";

import Slider from "../components/slider";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function InterestsSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const images_1 = [img_1, img_2, img_3, img_4];
  const images_2 = [img_5, img_6, img_7];
  const images_3 = [img_8, img_9, img_10];

    useEffect(() => {
        const interval = setInterval(() => {
            const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry) => {
              if (entry.isIntersecting === true && entry.intersectionRatio >= 0.5)
              {  
                navigate('/#interests');
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
    <section ref={sectionRef} id="interests" className='h-full min-h-screen bg-white text-black flex flex-col items-center justify-between'>
      <h2 className="text-[4rem] sm:text-[5rem] 2xl:text-[7rem] babylonica-r text-shadow-xs/70 p-8">{t("interests")}</h2>
      <div className="flex flex-col gap-20 text-center ml-5 mr-5 2xl:ml-40 2xl:mr-40">
        <p className="text-md 2xl:text-xl font-light italic">{t("interest_description")} </p>
        <div className="grid grid-cols-3 gap-1 xl:ml-[6vw]">
          <Slider images={images_1} ></Slider>
          <Slider images={images_2} ></Slider>
          <Slider images={images_3} ></Slider>
        </div>
      </div>
    </section>
  )
}

export default InterestsSection
