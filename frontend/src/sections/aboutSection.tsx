import { useTranslation } from "react-i18next";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";

function AboutSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>('about');

  return (
    <section ref={sectionRef} id="about" aria-labelledby="about-heading" className='relative min-h-screen bg-white text-black flex flex-col items-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24'>
      <h2 id="about-heading" className={`header-2 header-2-with-dark-line header-2-with-shadow-line animation-show-up ${isVisible ? "is-visible" : "" } text-center`}><span>{t("about")}</span></h2>
      <div className={`animation-show-up ${isVisible ? "is-visible" : "" } mt-12 mb-6 mx-4 sm:mt-16 sm:mx-6 md:mt-20 md:mb-8 md:mx-8 lg:mt-24 lg:mb-12 lg:mx-12 xl:mt-32 xl:mx-16 2xl:mt-40 2xl:mb-24 2xl:mx-24`}>
        <div className="bg-white w-full">
          <p className="small-text text-center mb-4 mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-32">{t("about_description")}</p>
          <div aria-hidden="true" className="w-full h-[1px] bg-black/10" />
        </div>
        <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center mx-auto">
          <article className="w-full flex flex-col items-center justify-center gap-4 p-5 sm:p-6 md:p-8 text-center md:border-r md:border-white/30 shadow-md">
            <h3 className="header-3">UI/UX Design</h3>
            <p className="small-text">{t("ui_ux_description")}</p>
          </article>
          <article className="w-full flex flex-col items-center justify-center gap-4 p-5 sm:p-6 md:p-8 text-center md:border-r md:border-white/30 shadow-md">
            <h3 className="header-3">Full-Stack Development</h3>
            <p className="small-text">{t("fullstack_description")}</p>
          </article>
          <article className="w-full flex flex-col items-center justify-center gap-4 p-5 sm:p-6 md:p-8 text-center md:border-r md:border-white/30 shadow-md">
            <h3 className="header-3">Game Development</h3>
            <p className="small-text">{t("game_development_description")}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
