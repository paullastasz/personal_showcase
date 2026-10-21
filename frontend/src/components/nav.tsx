
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation();

  return (
    <nav aria-label={t("main-nav")}>
      <ul className="flex flex-col gap-5 text-center lg:flex-row lg:gap-10">
        <li className="menu-option">
          <HashLink smooth to="#about">
            {t("about")}
          </HashLink>
        </li>
        <li className="menu-option">
          <HashLink smooth to="#skills">
            {t("skills")}
          </HashLink>
        </li>
        <li className="menu-option">
          <HashLink smooth to="#projects">
            {t("projects")}
          </HashLink>
        </li>
        <li className="menu-option">
          <HashLink smooth to="#contact">
            {t("contact")}
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
