import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { skillTypes } from "../data/skillType";
import { skills} from "../data/skills";
import SideMenu, { HeightLine, ThemeColor } from "../components/sideMenu";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";

function SkillsSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>('/#skills');
  
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 600 : false
  );

  const [activeType, setActiveType] = useState<number>(1);
  const getItemKey = (copy: number, id: string | number) => `${copy}-${id}`;

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
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

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

  const types = [...skillTypes.map((type) => ({
      id: type.id,
      name: type.nameWithTranslation ? t(type.nameWithTranslation) : type.name ? type.name : "",
    })),];

  const handleTransitionEnd = () => {
    const nextOffset = computeOffset();
    if (nextOffset === null) return;

    setAnimate(false);
    setOffset(nextOffset);

    requestAnimationFrame(() => setAnimate(true));
  };

  const fullMask = "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)";
  const bottomMask = "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)";

  return (
    <section ref={sectionRef}
            id="skills"
            aria-labelledby="skills-heading"
            className="min-h-screen bg-[--dark-color] text-white flex flex-col items-center px-3 py-6 min-[375px]:px-4 sm:px-6 sm:py-8 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16 2xl:px-24">
      <h2 id="skills-heading"
          className={`header-2 header-2-with-white-line animation-show-up ${isVisible ? "is-visible" : "" } text-center`}>
        <span>{t("skills")}</span>
      </h2>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-2 pb-6 min-[375px]:gap-3 min-[601px]:gap-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-4 sm:px-2 sm:pb-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 md:px-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-6 xl:gap-16 xl:px-8">

        <div className="relative z-10 w-full min-w-0 max-w-full">
          <SideMenu
            items={types}
            activeId={activeType}
            onSelect={(id) => setActiveType(Number(id))}
            ariaLabel={t("skill_categories")}
            themeColor={ThemeColor.Light}
            heightLine={HeightLine.Full}
          />
        </div>

        <div ref={listRef}
            className={`relative mt-0 mb-2 h-fit min-h-0 min-w-0 w-full max-w-full overflow-hidden min-[601px]:mt-5 min-[640px]:mt-24 sm:mb-0 sm:min-h-[180px] sm:max-h-[65vh] md:min-h-[320px] md:max-h-[75vh] lg:max-h-[80vh] animation-show-up ${isVisible ? "is-visible" : "" }`}
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
            }>

          <ul onTransitionEnd={handleTransitionEnd}
              className={`flex flex-col gap-2 min-[375px]:gap-3 sm:gap-3 md:gap-4 lg:gap-5 ${
                animate
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateY(${offset}px)` }} >

            {[0, 1, 2].map((copy) =>
              skillTypes.map((type) => {
                if (!type.name && !type.nameWithTranslation) return null;

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
                      className={`w-full min-w-0 shrink-0 border p-3 min-[375px]:p-4 sm:p-4 md:p-6 lg:p-7 transition-colors duration-300 ${
                        isActive
                          ? "border-white/50 bg-white/10"
                          : "border-white/15 bg-white/[0.03]"
                      }`}>

                    <h3 className="header-3 mb-3 break-words border-b border-white/20 pb-3 [overflow-wrap:anywhere] min-[375px]:mb-4 sm:mb-5">
                      {typeName}
                    </h3>

                    <ul className="flex flex-wrap gap-2">
                      {typeSkills.map((skill) => {
                        const skillName = skill.nameWithTranslation
                          ? t(skill.nameWithTranslation)
                          : skill.name ?? "";

                        return (
                          <li key={skill.id}
                              className="small-text min-w-0 max-w-full break-words border border-white/15 bg-black/10 px-2 py-2 text-white/80 [overflow-wrap:anywhere] min-[375px]:px-3">
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
    </section>
  )
}

export default SkillsSection