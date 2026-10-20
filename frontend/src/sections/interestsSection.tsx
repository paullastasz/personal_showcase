import Slider from "../components/slider";
import { useTranslation } from "react-i18next";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";

import img_1 from "../assets/images/drawings/1.webp"
import img_2 from "../assets/images/drawings/2.webp"
import img_3 from "../assets/images/drawings/3.webp"
import img_4 from "../assets/images/drawings/4.webp"
import img_5 from "../assets/images/drawings/5.webp"
import img_6 from "../assets/images/drawings/6.webp"
import img_7 from "../assets/images/drawings/7.webp"
import img_8 from "../assets/images/drawings/8.webp"
import img_9 from "../assets/images/drawings/9.webp";
import img_10 from "../assets/images/drawings/10.webp";
import img_11 from "../assets/images/drawings/11.webp";

function InterestsSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>('/#interests');

  
  const images_1 = [img_1, img_2, img_3, img_8]; 
  const images_2 = [img_3, img_4, img_5, img_10];
  const images_3 = [img_6, img_7, img_9, img_11];
  

 return (
  <section ref={sectionRef}
          id="interests"
          aria-labelledby="interests-heading"
          className="relative h-full min-h-screen bg-white text-black flex flex-col items-center justify-between pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24">
    <h2 id="interests-heading"
        className={`header-2 header-2-with-dark-line header-2-with-shadow-line animation-show-up ${isVisible ? "is-visible" : "" } text-center`}>
      <span>{t("interests")}</span>
    </h2>

    <div className="flex w-full flex-col gap-8 text-center sm:gap-12 md:gap-16 lg:gap-20">
      <p className={`small-text mx-auto max-w-3xl px-3 min-[375px]:px-4 sm:px-6 md:px-12 lg:px-20 animation-show-up ${isVisible ? "is-visible" : "" }`}>
        {t("interest_description")}
      </p>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-1 min-[601px]:grid-cols-[repeat(3,minmax(0,1fr))] pl-8 pr-8 lg:pl-24 lg:pr-24">
        <Slider images={images_1} alt={t("interests_slider")}></Slider>
        <Slider images={images_2} alt={t("interests_slider")}></Slider>
        <Slider images={images_3} alt={t("interests_slider")}></Slider>
      </div>
    </div>
  </section>
 )
}

export default InterestsSection
