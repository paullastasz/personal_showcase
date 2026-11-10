import { useId } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

function Nav() {
    const { t } = useTranslation();
    const spotlightId = useId().replace(/:/g, "");

    const links = [
        { to: "#about", label: t("about") },
        { to: "#skills", label: t("skills") },
        { to: "#projects", label: t("projects") },
        { to: "#contact", label: t("contact") },
    ];

    const gradientId = `${spotlightId}-beam-gradient`;
    const filterId = `${spotlightId}-soft-beam`;

    return (
        <nav aria-label={t("main_nav")}
             className="mt-2">
            {/* shared spotlight SVG definitions */}
            <svg aria-hidden="true"
                 focusable="false"
                 className="pointer-events-none absolute h-0 w-0">
                <defs>
                    <filter id={filterId}
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%">
                        <feGaussianBlur stdDeviation="11 0" />
                    </filter>

                    <linearGradient id={gradientId}
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="0%"
                              stopColor="white"
                              stopOpacity="0.30" />
                        <stop offset="45%"
                              stopColor="white"
                              stopOpacity="0.16" />
                        <stop offset="75%"
                              stopColor="white"
                              stopOpacity="0.07" />
                        <stop offset="90%"
                              stopColor="white"
                              stopOpacity="0.02" />
                        <stop offset="100%"
                              stopColor="white"
                              stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-7">
                {links.map((link, index) => (
                    <li key={link.to}
                        className="flex items-center gap-x-4 md:gap-x-7">
                        <HashLink smooth
                                  to={link.to}
                                  className="menu-option group relative isolate inline-flex items-center justify-center px-3 py-4 uppercase tracking-[0.18em] transition-colors duration-500">
                            {/* spotlight */}
                            <span aria-hidden="true"
                                  className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[110%] w-[180%] -translate-x-1/2 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-80">
                                <svg viewBox="0 0 200 140"
                                     preserveAspectRatio="none"
                                     className="h-full w-full overflow-visible">
                                    <path d="M84 0 L116 0 L200 140 L0 140 Z"
                                          fill={`url(#${gradientId})`}
                                          filter={`url(#${filterId})`} />
                                </svg>
                            </span>

                            <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                {link.label}
                            </span>
                        </HashLink>

                        {/* separator dot */}
                        {index !== links.length - 1 && (
                            <span aria-hidden="true"
                                  className="h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;