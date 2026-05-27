import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

function Nav() {
  // @ts-ignore
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <ul className='flex flex-col lg:flex-row lg:flex-row text-2xl 2xl:text-3xl font-(family-name:var(--light-font)) font-thin gap-5 lg:gap-10'>
        <li className='hover:text-yellow-100 hover:animate-pulse'><HashLink smooth to="#experience">{t("experience")}</HashLink></li>
        <li className='hover:text-yellow-100 hover:animate-pulse'><HashLink smooth to="#education">{t("education")}</HashLink></li>
        <li className='hover:text-yellow-100 hover:animate-pulse'><HashLink smooth to="#skills">{t("skills")}</HashLink></li>
        <li className='hover:text-yellow-100 hover:animate-pulse'><HashLink smooth to="#certificates">{t("certificates")}</HashLink></li>
        <li className='hover:text-yellow-100 hover:animate-pulse'><HashLink smooth to="#interests">{t("interests")}</HashLink></li>
        <li className='hover:text-yellow-100 hover:animate-pulse'><HashLink smooth to="#contact">{t("contact")}</HashLink></li>
      </ul>
    </nav>
  )
}

export default Nav