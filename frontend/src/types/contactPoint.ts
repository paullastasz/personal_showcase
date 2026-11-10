import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ContactPoint {
  id: number;
  name?: string;
  nameWithTranslation?: string;
  link?: string;
  linkNameWithTranslation?: string;
  iconDef: IconDefinition;
  iconText?: string;
}