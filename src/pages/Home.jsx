import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SkillsSection from '../components/sections/SkillsSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </motion.div>
  )
}

export default Home