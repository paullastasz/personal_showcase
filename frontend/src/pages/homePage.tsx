import ExperienceSection from '../sections/experienceSection'
import EducationSection from '../sections/educationSection'
import SkillsSection from '../sections/skillsSection'
import CertificatesSection from '../sections/certificatesSection'
import InterestsSection from '../sections/interestsSection'
import ContactSection from '../sections/contactSection'
import Footer from '../components/footer'
import HomeSection from '../sections/homeSection'

function HomePage() {

  return (
    <>
      <HomeSection />
      <ExperienceSection/>
      <EducationSection/>
      <SkillsSection/>
      <CertificatesSection/>
      <InterestsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default HomePage