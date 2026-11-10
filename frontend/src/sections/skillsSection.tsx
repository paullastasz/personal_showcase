import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { skillTypes } from "../data/skillType";
import { skills } from "../data/skills";
import SideMenu, { HeightLine } from "../components/sideMenu";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";
import ResponsiveBackground from "../components/responsiveBackground";

function SkillsSection() {
  // @ts-ignore
  const NAME_SECTION = "skills";
  const { t } = useTranslation();
  const { sectionRef, isVisible } =
    useFragmentIdentifier<HTMLElement>(NAME_SECTION);

  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 600 : false
  );

  const [activeType, setActiveType] = useState<number>(1);

  const getItemKey = (copy: number, id: string | number) =>
    `${copy}-${id}`;

  const computeOffset = () => {
    const container = listRef.current;
    const item = itemRefs.current.get(getItemKey(1, activeType));

    if (!container || !item) return null;

    if (isMobile) {
      return -item.offsetTop;
    }

    return (
      container.clientHeight / 2 -
      (item.offsetTop + item.offsetHeight / 2)
    );
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const nextOffset = computeOffset();
    if (nextOffset === null) return;

    setAnimate(false);
    setOffset(nextOffset);

    requestAnimationFrame(() => setAnimate(true));
  }, [activeType, isMobile]);

  const types = [
    ...skillTypes.map((type) => ({
      id: type.id,
      name: type.nameWithTranslation
        ? t(type.nameWithTranslation)
        : type.name
          ? type.name
          : "",
    })),
  ];

  const handleTransitionEnd = () => {
    const nextOffset = computeOffset();
    if (nextOffset === null) return;

    setAnimate(false);
    setOffset(nextOffset);

    requestAnimationFrame(() => setAnimate(true));
  };

  const fullMask =
    "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)";

  const bottomMask =
    "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)";

  return (
    <section ref={sectionRef}
             id={NAME_SECTION}
             aria-labelledby="skills-heading"
             className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden" >

      {/*bBackground video */}
      <ResponsiveBackground
            image="15370749_3840_2160_30fps.webp"
            video="15370749_3840_2160_30fps.mp4"
            className="absolute inset-0 z-[-2] h-full w-full object-cover sharpen-filter" />

      {/* overlays */}
      <div aria-hidden="true"
           className="absolute inset-0 z-[-1] bg-amber-950/30" />

      <div aria-hidden="true"
           className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#0E0502]/60 via-sky-950/30 to-amber-950/30" />

      <div aria-hidden="true"
           className="absolute inset-0 z-[-1] bg-gradient-to-t from-[#130C0E] via-[#0D1318]/20 to-transparent" />

      {/* main content */}
      <div className="relative z-10 flex w-full items-center justify-center max-sm:mx-10 max-sm:my-20">
        <div className="flex w-full flex-col items-center justify-center gap-4 min-[601px]:flex-row
                        min-[601px]:gap-8 md:gap-10  lg:gap-14" >

          {/* skills content */}
          <div className={`flex min-w-0 w-full flex-col items-center text-center 
                           animation-show-up ${ isVisible ? "is-visible" : "" }`} >

            {/* heading */}
            <h2 id="skills-heading"
                className="header-2 text-gradient-orange-50 break-all" >
              {t("skills")}
            </h2>

            {/* menu - mobile */}
            <div className="flex w-full shrink-0 items-center justify-center max-sm:mt-20 py-3 min-[601px]:hidden">
              <SideMenu
                items={types}
                activeId={activeType}
                onSelect={(id) => setActiveType(Number(id))}
                ariaLabel={t("skill_categories")}
                heightLine={HeightLine.Full}
              />
            </div>

            {/* Skills list */}
            <div ref={listRef}
                 className="relative h-fit min-h-0 min-w-0 w-full max-w-full mt-5 mb-10 overflow-hidden
                            min-[601px]:mt-5 min-[640px]:mt-24 sm:mb-0 sm:min-h-[180px] sm:max-h-[65vh]
                            md:min-h-[320px] md:max-h-[75vh] lg:max-h-[80vh] sm:w-[85%] sm:max-w-[650px]"
                 style={
                        isMobile
                          ? {
                              height: "70vh",
                              maskImage: bottomMask,
                              WebkitMaskImage: bottomMask,
                            }
                          : {
                              maskImage: fullMask,
                              WebkitMaskImage: fullMask,
                            }
                       } >
              <ul onTransitionEnd={handleTransitionEnd}
                  className={`flex flex-col gap-2 min-[375px]:gap-3 sm:gap-3 md:gap-4 lg:gap-5 
                              ${ animate ? "transition-transform duration-500 ease-in-out" : "" }`}
                  style={{ transform: `translateY(${offset}px)` }} >

                {[0, 1, 2].map((copy) =>
                  skillTypes.map((type) => {
                    if (!type.name && !type.nameWithTranslation) {
                      return null;
                    }

                    const isActive = activeType === type.id;

                    const typeName = type.nameWithTranslation
                      ? t(type.nameWithTranslation)
                      : type.name ?? "";

                    const typeSkills = skills.filter(
                      (skill) => skill.skillTypeId === type.id
                    );

                    return (
                      <li key={getItemKey(copy, type.id)}
                          ref={(element) => {
                            const key = getItemKey(copy, type.id);

                            if (element) {
                              itemRefs.current.set(key, element);
                            } else {
                              itemRefs.current.delete(key);
                            }
                          }}
                          aria-current={isActive ? "true" : undefined}
                          className="w-full min-w-0 shrink-0 border-0 bg-transparent p-4 md:p-6 lg:p-7 transition-colors duration-300" >
                        
                        {/* category heading */}
                        <h3 className={`header-3 mb-5 break-words border-0 pb-0 [overflow-wrap:anywhere]
                                        ${
                                          isActive
                                            ? "text-[var(--orange-color)]"
                                            : ""
                                        }`} >
                          {typeName}
                        </h3>

                        {/* divider */}
                        <div className="mb-5 md:mb-6 h-px w-full bg-white" />

                        {/* skills */}
                        <ul className="flex flex-wrap light-text gap-2 justify-center gap-x-5 gap-y-3">
                          {typeSkills.map((skill) => {
                            const skillName = skill.nameWithTranslation
                              ? t(skill.nameWithTranslation)
                              : skill.name ?? "";

                            return (
                              <li key={skill.id}
                                  className={`min-w-0 max-w-full px-4 py-2 [overflow-wrap:anywhere]
                                              ${
                                                isActive
                                                  ? "text-bold-[var(--orange-color)]"
                                                  : ""
                                              }`} >
                                {skillName}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>

          {/* side menu - desktop */}
          <div className="hidden light-text uppercase w-fit shrink-0 self-center min-[601px]:block sm:mr-10">
            <SideMenu
              items={types}
              activeId={activeType}
              onSelect={(id) => setActiveType(Number(id))}
              ariaLabel={t("skill_categories")}
              heightLine={HeightLine.Full}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;