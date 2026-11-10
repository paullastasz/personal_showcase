import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import { categoryProjects } from "../data/categoryProject";
import { projects } from "../data/projects";

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  const categoryName = categoryProjects.find(
    (category) => category.id === project.category
  )?.name;

  return (
    <article className="group h-full min-w-0 w-full text-black overflow-hidden 
                        border-2 border-[var(--orange-color)] bg-white transition duration-300">
      {/* project preview */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-[6/3]">
        {project.video ? (
          <video
            key={project.id}
            controls
            preload="none"
            playsInline
            className="w-full h-full object-contain">
            <source src={project.video} type="video/mp4" />
            {t("no_preview")}
          </video>
        ) : project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={t(project.nameWithTranslation)}
            loading="lazy"
            decoding="async"
            className="w-full h-full" />
        ) : (
          <div className="flex h-full items-center justify-center info-text">
            {t("no_preview")}
          </div>
        )}
      </div>

      {/* project information */}
      <div className="flex items-start justify-between gap-3 p-3 min-[375px]:p-4 sm:gap-4 sm:p-5">
        <div className="min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
          <h3 className="header-3-label">
            {project.nameWithTranslation &&
              t(project.nameWithTranslation)}
          </h3>

          {categoryName && (
            <p className="text-label mb-2 tracking-[0.2em]">
              {categoryName}
            </p>
          )}

          {project.technologies && (
            <p className="text-label mb-2 tracking-[0.2em]">
              {t("technologies_and_tools")}: {project.technologies}
            </p>
          )}
        </div>

        {/* project links */}
        <div className="flex shrink-0 flex-col gap-3 sm:gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("open_project")}: ${project.nameWithTranslation}`}
              className="shrink-0 transition-transform group-hover:translate-x-1" >
              <FontAwesomeIcon icon={faShare} aria-hidden="true" />
            </a>
          )}

          {project.repoLink && project.repoIconDef && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("open_repo")}: ${project.nameWithTranslation}`}
              className="shrink-0 transition-transform group-hover:translate-x-1">
              <FontAwesomeIcon
                icon={project.repoIconDef}
                aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;