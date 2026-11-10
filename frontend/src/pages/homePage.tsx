import SkillsSection from '../sections/skillsSection';
import ContactSection from '../sections/contactSection';
import Footer from '../components/footer';
import HomeSection from '../sections/homeSection';
import ProjectsSection from '../sections/projectsSection';
import AboutSection from '../sections/aboutSection';

function HomePage() {

  return (
    <>
    <header>
      <HomeSection />
    </header>
    <main>
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
    <Footer/>
    </>
  )
}

export default HomePage