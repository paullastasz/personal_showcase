import type { IconDefinition } from '@fortawesome/fontawesome-common-types';


export interface Project {
  id: number;
  nameWithTranslation: string;
  technologies?: string;
  link?: string;
  repoLink?: string;
  repoIconDef?: IconDefinition;
  video?: string;
  imageSrc?: string;
  category: number;
}