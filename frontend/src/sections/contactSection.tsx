import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

import { contactPoints } from "../data/contactPoints";
import { useFragmentIdentifier } from '../hooks/useFragmentIdentifier';
import ResponsiveBackground from '../components/responsiveBackground';


function ContactSection() {
  // @ts-ignore
  const NAME_SECTION = 'contact';
  const { t } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>(NAME_SECTION);

  return (
 <section ref={sectionRef}
               id={NAME_SECTION}
               aria-labelledby='contact-heading'
               className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">\

          {/* background video */}
          <ResponsiveBackground
            image="1826896-hd_1920_1080_24fps.webp"
            video="1826896-hd_1920_1080_24fps.mp4"
            className="absolute inset-0 z-[-2] h-full w-full object-cover sharpen-filter saturate-filter-1.2" />

          {/* overlays */}
          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-amber-950/30" />

          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-gradient-to-r from-black/70 via-sky-950/25 to-amber-950/20" />

          <div aria-hidden="true"
               className="absolute inset-0 z-[-1] bg-gradient-to-l from-black/20 via-transparent to-transparent" />



          {/* main content */}
          <div className={`relative z-10 flex w-full flex-col items-center justify-center  px-6 text-center 
                           transition-all duration-1000 animation-show-up 
                           ${isVisible ? "is-visible" : ""}`}>
              
              <h2 id="about-heading"
                    className="header-2 text-gradient-orange-30">
                    {t(NAME_SECTION)}
              </h2>

              <div aria-hidden="true" className="h-[1px] w-full max-w-[98dvw] bg-white" />

              <ul className={`mt-8 grid w-full max-w-7xl grid-cols-1 place-items-center gap-y-8 
                              sm:mt-12 md:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 
                              animation-show-up ${isVisible ? "is-visible" : "" }`}>
                {contactPoints.map((point) => {
                  if (!point.name && !point.nameWithTranslation) return null;

                  return (
                    <li key={point.id}
                        className="flex w-full min-w-0 flex-col items-center justify-center gap-y-2 text-center sm:gap-y-3">
                      <div className="flex flex-row items-center gap-x-3 sm:gap-x-5">
                        <FontAwesomeIcon
                          icon={point.iconDef}
                          size="2xl"
                          className="shrink-0" />

                        <h3 className="header-3 [overflow-wrap:anywhere]">
                          {point.name ?? t(point.nameWithTranslation!)}
                        </h3>
                      </div>

                      <div className="flex min-w-0 max-w-full flex-row">
                        {point.link && point.linkNameWithTranslation ? (
                          <p className="light-text [overflow-wrap:anywhere] 2xl:text-lg hover:text-bold-[var(--orange-color)]">
                            <a
                              href={point.link}
                              target="_blank"
                              rel="noopener noreferrer">
                              {t(point.linkNameWithTranslation)}
                            </a>
                          </p>
                        ) : (
                          <p className="light-text [overflow-wrap:anywhere]">
                            {point.iconText}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
          </div>
      </section>
 )
}

export default ContactSection
