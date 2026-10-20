import LanguageSwitcher from "../components/languageSwitcher";
import Name from "../components/name";
import Nav from "../components/nav";
import { useFragmentIdentifier } from "../hooks/useFragmentIdentifier";


function HomeSection() {
  const { sectionRef, isVisible } = useFragmentIdentifier<HTMLElement>('/');

  return (
    <section ref={sectionRef} id="home" aria-label="Home" className="relative h-screen grid grid:cols-2 sm:gap-y-5 md:gap-y-5 lg:gap-y-8 xl:gap-y-10 2xl:gap-y-5">
      <video  autoPlay 
              muted
              loop
              playsInline
              aria-hidden="true"
              preload="metadata"
              className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none saturate-50">
          <source
            src="/videos/7794279-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
      </video>
	    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40 pointer-events-none" />
      <div className="flex flex-col items-end">
          <LanguageSwitcher/>
      </div>
      <div className={`flex flex-col items-center animation-show-up ${isVisible ? "is-visible" : "" }`}>
        <Name name="Paulina" last_name="Staszewska"/>
        <Nav></Nav>
      </div>
    </section>
  )
}

export default HomeSection
