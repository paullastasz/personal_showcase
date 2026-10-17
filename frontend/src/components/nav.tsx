import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

function Nav() {
  // @ts-ignore
  const { t, i18n } = useTranslation();

  return (
    <nav aria-label={t("main-nav")}>
      <ul className='flex flex-col lg:flex-row lg:flex-row text-center gap-5 lg:gap-10'>
        <li className='menu-option'><HashLink smooth to="#about">{t("about")}</HashLink></li>
        <li className='menu-option'><HashLink smooth to="#skills">{t("skills")}</HashLink></li>
        <li className='menu-option'><HashLink smooth to="#projects">{t("projects")}</HashLink></li>
        <li className='menu-option'><HashLink smooth to="#interests">{t("interests")}</HashLink></li>
        <li className='menu-option'><HashLink smooth to="#contact">{t("contact")}</HashLink></li>
      </ul>
    </nav>
  )
}

export default Nav