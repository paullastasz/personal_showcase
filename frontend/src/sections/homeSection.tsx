import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/languageSwitcher";
import Nav from "../components/nav";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";
import ResponsiveBackground from "../components/responsiveBackground";

function HomeSection() {
  // @ts-ignore
  const NAME_SECTION = "home";
  const { t } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>("");

  return (
      <section ref={sectionRef}
               id={NAME_SECTION}
               aria-label={t(NAME_SECTION)}
               className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">
                
          {/* background */}
          <ResponsiveBackground
            image="20670675-uhd_3840_2160_30fps.webp"
            video="20670675-uhd_3840_2160_30fps.mp4"
            className="absolute inset-0 z-[-2] h-full w-full object-cover sharpen-filter saturate-filter-1.2" />

          {/* overlays */}
          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-amber-950/35" />

          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-gradient-to-r from-black/70 via-black/25 to-amber-950/20" />

          {/* language switcher */}
          <div className="absolute right-6 top-6 z-30 md:right-10 max-sm:right-10 md:top-8  max-sm:text-bold-[var(--light-color)]">
              <LanguageSwitcher />
          </div>

          {/* main content */}
          <div className={`relative z-10 flex w-full flex-col items-center justify-center  px-6 text-center 
                           transition-all duration-1000 animation-show-up 
                           ${isVisible ? "is-visible" : ""}`}>
              <h1 className="header-1 text-gradient-orange-10 mb-0 text-center leading-none">
                  PORTFOLIO
              </h1>

              {/* navigation */}
              <Nav />
          </div>

          {/* signature */}
          <div className="absolute bottom-12 right-8 z-20 md:bottom-16 md:right-16">
              <span className="signature inline-block rotate-[-8deg] whitespace-nowrap">
                  Paulina Staszewska
              </span>
          </div>
      </section>
  );
}

export default HomeSection;