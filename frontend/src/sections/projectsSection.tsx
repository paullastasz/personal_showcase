import { useState } from "react";
import { useTranslation } from "react-i18next";

import { categoryProjects } from "../data/categoryProject";
import { projects } from "../data/projects";
import SideMenu, { HeightLine } from "../components/sideMenu";
import ProjectCard from "../components/projectCard";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";
import ResponsiveBackground from "../components/responsiveBackground";

function ProjectsSection() {
  const NAME_SECTION = "projects";

  const { t } = useTranslation();

  const { sectionRef, isVisible } =
    useFragmentIdentifier<HTMLElement>("projects", 0.2);

  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    { id: 0 as const, name: t("all") },
    ...categoryProjects.map((category) => ({
      id: category.id,
      name: category.nameWithTranslation
        ? t(category.nameWithTranslation)
        : category.name
          ? category.name
          : "",
    })),
  ];

  const visibleProjects =
    activeCategory === 0
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section ref={sectionRef}
             id={NAME_SECTION}
             aria-labelledby="projects-heading"
             className="relative isolate flex min-h-screen w-full overflow-hidden" >

      {/* background video */}
      <ResponsiveBackground
            video="3048227-uhd_3840_2160_30fps.mp4"
            className="absolute inset-0 z-[-2] h-full w-full object-cover sharpen-filter" />

      {/* overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-amber-950/30" />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-gradient-to-r from-black/60 via-sky-950/40 to-amber-950/40" />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-gradient-to-r from-orange-950/10 via-transparent to-black/40" />

      {/* main content */}
      <div className="relative z-10 w-full max-w-7xl mx-10 xl:px-4 sm:px-0 py-10 lg:pb-20 pb-50">
        {/* main grid */}
        <div className="grid grid-cols-1 min-[640px]:grid-cols-2 items-stretch"
             style={{columnGap: "32px", rowGap: "48px", }}>

          {/* heading and menu */}
          <div className="relative z-50 flex min-w-0 flex-col items-center">
            <h2 id="projects-heading"
              className={`header-2 text-gradient-orange-70 text-center my-10 z-10 animation-show-up 
                          ${isVisible ? "is-visible" : "" }`}>
              {t(NAME_SECTION)}
            </h2>

            {/* menu */}
            <div className="relative z-10 light-text uppercase md:w-fit w-full max-md:justify-items-center sm:z-0">
              <SideMenu
                items={categories}
                activeId={activeCategory}
                onSelect={(id) => setActiveCategory(Number(id))}
                ariaLabel={t("project_categories")}
                heightLine={HeightLine.NotFull}
              />
            </div>
          </div>

          {/* 1st project */}
          {visibleProjects.length > 0 && (
            <div className={`relative z-0 h-full min-w-0 min-[640px]:mt-24 animation-show-up 
                             ${ isVisible ? "is-visible" : "" }`} >
              <ProjectCard project={visibleProjects[0]} />
            </div>
          )}

          {/* empty state */}
          {visibleProjects.length === 0 && (
            <div className="relative z-0 light-text text-bold-[#000000] bg-[var(--orange-color)] 
                            w-1/2 h-15 flex items-center justify-center m-auto">
              {t("no_content")}
            </div>
          )}

          {/* remaining projects */}
          {visibleProjects.slice(1).map((project) => (
            <div key={project.id}
                 className="relative z-0 h-full min-w-0 py-10 sm:py-25" >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;