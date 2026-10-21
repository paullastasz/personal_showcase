import { useState } from "react";

export const ThemeColor = {
  Light: 1,
  Dark: 2,
} as const;

export type ThemeColor =
  (typeof ThemeColor)[keyof typeof ThemeColor];

export const HeightLine = {
  Full: 1,
  NotFull: 2,
} as const;

export type HeightLine = (typeof HeightLine)[keyof typeof HeightLine];

type SideMenuItem = {
  id: string | number;
  name: string;
};

type SideMenuProps = {
  items: SideMenuItem[];
  activeId: string | number;
  onSelect: (id: string | number) => void;
  ariaLabel: string;
  themeColor: ThemeColor;
  heightLine: HeightLine;
};

function SideMenu({items, activeId, onSelect, ariaLabel, themeColor, heightLine}: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <aside aria-label={ariaLabel} className="relative z-20 w-full self-start md:pt-2">
    <div className="relative min-[601px]:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-3 border px-4 py-3 text-left ${
          themeColor === ThemeColor.Dark
            ? "border-black/20 bg-white text-[var(--dark-color)]"
            : "border-white/20 bg-[var(--dark-color)] text-[var(--white-color)]"}`}>
        <span className="nav-text nav-text-with-interaction">
          {items.find((item) => item.id === activeId)?.name ?? ariaLabel}
        </span>

        <svg aria-hidden="true"
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
          <path d="m6 9 6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute left-0 right-0 top-full z-50 border shadow-xl ${
            themeColor === ThemeColor.Dark
              ? "border-black/20 bg-white"
              : "border-white/20 bg-[var(--dark-color)]"}`}>

          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button key={item.id}
                      type="button"
                      onClick={() => {onSelect(item.id); setIsOpen(false);}}
                      aria-pressed={isActive}
                      className={`flex min-h-[48px] w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                        isActive
                          ? "bg-white/10"
                          : "hover:bg-white/5"}`}>
                <span className={`h-[9px] w-[9px] shrink-0 rounded-full border ${
                    themeColor === ThemeColor.Dark
                      ? "border-[var(--dark-color)]"
                      : "border-[var(--white-color)]"
                    } ${
                    isActive ? themeColor === ThemeColor.Dark
                        ? "bg-[var(--dark-color)]"
                        : "bg-[var(--white-color)]"
                      : "bg-transparent"}`}/>

                <span className={`nav-text nav-text-with-interaction ${
                    isActive
                      ? themeColor === ThemeColor.Dark
                        ? "font-semibold text-[var(--dark-color)]"
                        : "font-semibold text-[var(--white-color)]"
                      : "text-neutral-700"}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>

    <div className="hidden min-[601px]:block">
      <div className="relative">
        <div aria-hidden="true"
            className={`absolute left-[5px] w-[2.5px] ${
              themeColor === ThemeColor.Dark
                ? "bg-[var(--dark-color)]"
                : "bg-[var(--white-color)]"}`}
            style={{
              top: heightLine === HeightLine.NotFull ? "-100vh" : "-32vh",
              height: `calc(100vh + 5px + ${(items.length - 1) * 56}px)`, }}/>

        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button key={item.id}
                    type="button"
                    onClick={() => onSelect(item.id)}
                    aria-pressed={isActive}
                    className="group relative flex h-[52px] items-center gap-5 text-left" >
              <span className={`relative z-10 h-[11px] w-[11px] shrink-0 rounded-full border ${
                  themeColor === ThemeColor.Dark
                    ? "border-[var(--dark-color)]"
                    : "border-[var(--white-color)]"} transition-all duration-300 ${
                  isActive
                    ? `scale-150 ring-2 ${
                        themeColor === ThemeColor.Dark
                          ? "bg-[var(--white-color)] ring-[var(--white-color)]"
                          : "bg-[var(--dark-color)] ring-[var(--dark-color)]"
                      }`
                    : themeColor === ThemeColor.Dark
                      ? "bg-[var(--dark-color)] group-hover:bg-[var(--white-color)]"
                      : "bg-[var(--white-color)] group-hover:bg-[var(--dark-color)]"}`} />

              <span className={`nav-text nav-text-with-interaction transition-colors duration-200 ${
                  isActive
                    ? `font-semibold font-black ${
                        themeColor === ThemeColor.Dark
                          ? "text-black"
                          : "text-text-white"}`
                    : themeColor === ThemeColor.Dark
                          ? "text-neutral-600 group-hover"
                          : "text-neutral-300 md:text-neutral-400 group-hover"}`} >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </aside>
  );
}

export default SideMenu;