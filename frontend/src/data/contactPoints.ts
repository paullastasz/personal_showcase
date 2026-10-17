import type { ContactPoint } from "../types/contactPoint";

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const contactPoints: ContactPoint[] = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/paulina-staszewska-ba4ba3309",
    linkNameWithTranslation: "see_profile",
    iconDef: faLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/paullastasz",
    linkNameWithTranslation: "see_projects",
    iconDef: faGithub,
  },
  {
    id: 3,
    nameWithTranslation: "email",
    link: "https://www.linkedin.com/in/paulina-staszewska-ba4ba3309",
    iconDef: faEnvelope,
    iconText: "staszewska.paulina.it@gmail.com"
  },
];