import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

import { contactPoints } from "../data/contactPoints";
import { useFragmentIdentifier } from '../hooks/useFragmentIdentifier';


function ContactSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>('/#contact');

  return (
  <section ref={sectionRef}
          id="contact"
          aria-labelledby="contact-heading"
          className="relative min-h-screen flex flex-col justify-center items-center px-3 py-6 min-[375px]:px-4 sm:px-6 sm:py-8 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16 2xl:px-24">
    <h2 id="contact-heading" 
        className={`header-2 text-center animation-show-up ${isVisible ? "is-visible" : "" }`}>
      {t("contact")}
    </h2>

    <div aria-hidden="true" className="h-[1px] w-full max-w-[98dvw] bg-white" />

    <ul className={`mt-8 grid w-full max-w-7xl grid-cols-1 place-items-center gap-y-8 sm:mt-12 md:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 animation-show-up ${isVisible ? "is-visible" : "" }`}>
      {contactPoints.map((point) => {
        if (!point.name && !point.nameWithTranslation) return null;

        return (
          <li key={point.id}
              className="flex w-full min-w-0 flex-col items-center justify-center gap-y-2 text-center sm:gap-y-3">
            <div className="flex flex-row items-center gap-x-3 sm:gap-x-5">
              <FontAwesomeIcon
                icon={point.iconDef}
                size="2xl"
                className="shrink-0"
                style={{ color: "rgb(255, 255, 255)" }}/>

              <h3 className="header-3 break-words [overflow-wrap:anywhere]">
                {point.name ?? t(point.nameWithTranslation!)}
              </h3>
            </div>

            <div className="flex min-w-0 max-w-full flex-row">
              {point.link && point.linkNameWithTranslation ? (
                <p className="nav-text nav-text-with-interaction break-words text-neutral-400 italic [overflow-wrap:anywhere] 2xl:text-lg">
                  <a
                    href={point.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {t(point.linkNameWithTranslation)}
                  </a>
                </p>
              ) : (
                <p className="nav-text break-words text-neutral-400 italic [overflow-wrap:anywhere]">
                  {point.iconText}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </section>
 )
}

export default ContactSection
