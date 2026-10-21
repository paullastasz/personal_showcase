import { useState } from "react";
import { useTranslation } from "react-i18next";

import { categoryProjects } from "../data/categoryProject";
import { projects } from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import SideMenu, { HeightLine, ThemeColor } from "../components/sideMenu";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";

function ProjectsSection() {
  // @ts-ignore
  const { t, i18n } = useTranslation();
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>('projects', 0.2);

  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [{ id: 0 as const, name: t("all") }, ...categoryProjects.map((category) => ({
      id: category.id,
      name: category.nameWithTranslation ? t(category.nameWithTranslation) : category.name ? category.name : "",
    })),];

  const visibleProjects = activeCategory === 0 ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section ref={sectionRef}
            id="projects"
            aria-labelledby="projects-heading"
            className="relative min-h-screen overflow-hidden bg-white text-black flex flex-col items-center px-3 py-6 min-[375px]:px-4 sm:px-6 sm:py-8 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16 2xl:px-24">
      <h2 id="projects-heading" 
          className={`header-2 header-2-with-dark-line header-2-with-shadow-line animation-show-up ${isVisible ? "is-visible" : "" } text-center`}>
          <span>{t("projects")}</span>
      </h2>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-2 pb-6 min-[375px]:gap-3 min-[601px]:gap-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-4 sm:px-2 sm:pb-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 md:px-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-6 xl:gap-16 xl:px-8">
        <div className="relative z-10 w-full min-w-0 max-w-full">
          <SideMenu items={categories}
                    activeId={activeCategory}
                    onSelect={(id) => setActiveCategory(Number(id))} 
                    ariaLabel={t("project_categories")} 
                    themeColor={ThemeColor.Dark}
                    heightLine={HeightLine.NotFull} />
        </div>

        <div className={`min-w-0 w-full max-w-full mt-0 min-[601px]:mt-5 min-[640px]:mt-24 animation-show-up ${isVisible ? "is-visible" : "" }`}>
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {visibleProjects.length === 0
              ? <div className="flex min-h-[40dvh] items-center justify-center info-text">{t("no_content")}</div>
              : visibleProjects.map((project) => { 
              const categoryName = categoryProjects.find((category) => category.id === project.category)?.name;

              return (
                <article key={project.id} className="group min-w-0 overflow-hidden border border-[#18131A] bg-white transition duration-300 hover:border-[#18131A]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-[6/3]">
                    { project.video ? (
                        <video key={project.id} 
                               controls 
                               preload="none"  
                               playsInline
                               className="w-full h-full object-contain">
                          <source src={project.video} 
                                  type="video/mp4" />
                          {t("no_preview")}
                        </video>
                     ) : (
                      project.imageSrc ? (
                        <img src={project.imageSrc} 
                             alt={t(project.nameWithTranslation)} 
                             loading="lazy"
                             decoding="async"
                             className="w-full h-full"/>
                        ) : (
                        <div className="flex h-full items-center justify-center info-text">
                          {t("no_preview")}
                        </div>
                    ))}
                  </div>

                  <div className="flex items-start justify-between gap-3 p-3 min-[375px]:p-4 sm:gap-4 sm:p-5">
                    <div className="min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
                       <h3 className="header-3">
                        {project.nameWithTranslation && t(project.nameWithTranslation)}
                      </h3>

                      {categoryName && (
                        <p className="label mb-2 tracking-[0.2em]">
                        {categoryName}
                        </p>
                      )}

                      {project.technologies && (
                        <p className="label mb-2 tracking-[0.2em]">
                        {t("technologies_and_tools")}: {project.technologies}
                        </p>
                      )}
                    </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:gap-4">
                    {project.link && (
                      <a href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("open_project")}: ${project.nameWithTranslation}`}
                        className="shrink-0 transition-transform group-hover:translate-x-1">
                        <FontAwesomeIcon icon={faShare} aria-hidden="true" />
                      </a>
                    )}
                    {(project.repoLink && project.repoIconDef) && (
                      <a href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("open_repo")}: ${project.nameWithTranslation}`}
                        className="shrink-0 transition-transform group-hover:translate-x-1">
                        <FontAwesomeIcon icon={project.repoIconDef} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;