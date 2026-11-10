import { useTranslation } from "react-i18next";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";
import ResponsiveBackground from "../components/responsiveBackground";

function AboutSection() {
  // @ts-ignore
  const NAME_SECTION = "about";
  const { t } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>(NAME_SECTION);

   const itAreas = [
        { label: "UI/UX Design", description: t("ui_ux_description")},
        { label: "Full-Stack Development", description: t("fullstack_description")},
        { label: "Game Development", description: t("game_development_description")},
    ];

  return (
    <section ref={sectionRef}
             id={NAME_SECTION}
             aria-labelledby="about-heading"
             className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">
      
          {/* background video */}
          <ResponsiveBackground
            image="15476205_1920_1080_25fps.webp"
            video="15476205_1920_1080_25fps.mp4"
            className="absolute inset-0 z-[-2] h-full w-full object-cover sharpen-filter" />

          {/* overlays */}
          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-amber-950/30" />

          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-gradient-to-r from-black/60 via-sky-950/40 to-amber-950/40" />
        
          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-gradient-to-r from-orange-950/10 via-transarent to-black/40" />


          {/* main content */}
          <div className={`relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center 
                           mx-auto w-full max-w-7xl gap-5 px-6 max-md:py-20 animation-show-up 
                           ${isVisible ? "is-visible" : ""}`}>

            {/* left column */}
            <div className="max-w-xl text-center md:text-left max-md:pb-20">
                <h2 id="about-heading"
                    className="header-2 text-gradient-orange-70">
                    {t("about_career")}
                </h2>
                <p className="light-text uppercase">
                  {t("about_hashtags")}
                </p>
            </div>

            {/* right column */}
            <div className={`relative z-10 flex flex-col gap-8 w-full h-full text-center
                             animation-show-up ${isVisible ? "is-visible" : ""}`}>
                  {itAreas.map((area) => (
                    <article key={area.label} 
                            className="w-full">
                      <h3 className="header-3 w-full ">
                        {area.label}
                      </h3>

                      <p className="light-text mt-3 max-w-2xl">
                        {area.description}
                      </p>
                    </article>
                  ))}
            </div>

          </div>
    </section>
  );
}

export default AboutSection;