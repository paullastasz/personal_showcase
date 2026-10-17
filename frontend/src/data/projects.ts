import type { Project } from "../types/project";
import { faGithub} from '@fortawesome/free-brands-svg-icons';

export const projects: Project[] = [
  {
    id: 1,
    nameWithTranslation: "project_1_name",
    link: "https://embed.figma.com/site/9joBtM2ygC1r4cbt4dZb0z/Untitled?node-id=0-1&embed-host=share",
    technologies: "Figma",
    category: 1,
  },
    {
    id: 2,
    nameWithTranslation: "project_2_name",
    link: "https://paulla-stasz.onrender.com/",
    repoLink: "https://github.com/paullastasz/personal_showcase",
    repoIconDef: faGithub,
    technologies: "React i TypeScript",
    category: 2,
  },
];