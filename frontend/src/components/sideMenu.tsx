import { useState } from "react";

export const HeightLine = {
  Full: 1,
  NotFull: 2,
} as const;

export type HeightLine =
  (typeof HeightLine)[keyof typeof HeightLine];

type SideMenuItem = {
  id: string | number;
  name: string;
};

type SideMenuProps = {
  items: SideMenuItem[];
  activeId: string | number;
  onSelect: (id: string | number) => void;
  ariaLabel: string;
  heightLine: HeightLine;
};

function SideMenu({
  items,
  activeId,
  onSelect,
  ariaLabel,
  heightLine,
}: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label={ariaLabel}
           className="relative z-20 flex h-fit w-max max-w-full flex-col" >
      {/* mobile */}
      <div className="relative w-full min-[640px]:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-3
                     border border-white/20 bg-[var(--orange-color)] 
                     px-15 md:px-4 py-3 text-left text-black" >
          <span className="whitespace-nowrap text-black text-bold-[#000000]">
            {items.find((item) => item.id === activeId)?.name ??
              ariaLabel}
          </span>

          <svg aria-hidden="true"
               className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2" >
               <path
                 d="m6 9 6 6 6-6"
                 strokeLinecap="round"
                 strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="relative left-0 right-0 top-full z-50 mt-1
                       border border-white/20 bg-[var(--orange-color)] shadow-xl " >
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelect(item.id);
                    setIsOpen(false);
                  }}
                  aria-pressed={isActive}
                  className={`flex min-h-[48px] w-full items-center gap-3 px-4 py-3 text-left transition-colors
                    ${ 
                      isActive
                        ? "bg-white/20"
                        : "hover:bg-white/10"
                    }`}>
                  <span
                    className={`h-[9px] w-[9px] shrink-0 rounded-full border border-black
                      ${
                        isActive
                          ? "bg-black"
                          : "bg-transparent"
                      } `} />

                  <span
                    className="nav-text nav-text-with-interaction whitespace-nowrap text-black text-bold-[#000000]" >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* desktop */}
      <div className="hidden min-[640px]:flex min-[640px]:flex-1 min-[640px]:flex-col">
        <div className="relative flex flex-1 flex-col">
          {/* line */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] z-0 w-[2.5px] bg-[var(--light-color)]"
            style={{
              top:
                heightLine === HeightLine.Full
                  ? 0
                  : -300,
              bottom:
                heightLine === HeightLine.Full
                  ? 0
                  : 20,
            }} />

          {/* items */}
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                aria-pressed={isActive}
                className="group relative flex h-[52px] w-max shrink-0 items-center gap-5 whitespace-nowrap text-left" >
                {/* dot */}
                <span
                  className={`relative z-10 h-[15px] w-[15px] shrink-0 rounded-full border border-[var(--light-color)]
                              transition-all duration-300
                              ${
                                isActive
                                  ? "scale-150 bg-[var(--orange-color)] ring-2 ring-[var(--orange-color)]"
                                  : "bg-[var(--light-color)] group-hover:bg-[var(--orange-color)]"
                              }
                            `}/>

                {/* label */}
                <span
                  className={`nav-text nav-text-with-interaction whitespace-nowrap transition-colors duration-200
                              ${
                                isActive
                                  ? "text-bold-[var(--orange-color)] text-[var(--orange-color)]"
                                  : "text-[var(--light-color)] group-hover:text-bold-[var(--orange-color)]"
                              }
                            `} >
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