import { useState } from 'react'
import { Code, Globe, Palette, Smartphone } from 'lucide-react'

import AboutSection from './components/AboutSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ImageModal from './components/ImageModal'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    {
      title: 'Hospital Management System',
      description:
        'A comprehensive hospital management system built with React, JavaScript, and Node.js. Features patient management, appointment scheduling, and administrative dashboard.',
      tech: ['React', 'JavaScript', 'Node.js', 'MySQL'],
      github: 'https://github.com/jyoti602/hospital-management-system',
      demo: 'https://hms-ui-by-jyoti.netlify.app/',
    },
    {
      title: 'Republic Day Web Project',
      description:
        "A creative web project celebrating India's Republic Day with interactive features, animations, and responsive design using HTML, CSS, and JavaScript.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/jyoti602/republic-day-web-page',
      demo: 'https://republic-day-india-by-jyoti.netlify.app/',
    },
    {
      title: 'College Website',
      description:
        'A complete college website built with React, JavaScript, and Python FastAPI backend. Features dynamic content management and responsive design.',
      tech: ['React', 'JavaScript', 'Python', 'FastAPI'],
      github: 'https://github.com/jyoti602/ggp_almora_college_ui',
      demo: 'https://ggp-almora-college.onrender.com/',
    },
    {
      title: 'Government Schemes Eligibility Checker',
      description:
        'AI‑powered web app that helps Indian citizens determine eligibility for government welfare schemes using intelligent form processing and a Gemini chatbot assistant.',
      tech: ['React', 'Vite', 'JavaScript', 'Google Gemini API', 'CSS'],
      github: 'https://github.com/jyoti602/chatbot-ai-solution',
      demo: 'https://yojana-mitra-ai-solution.netlify.app/',
    },
    {
      title: 'Human Resource Management System',
      description:
        'A comprehensive human resource management system built with React, JavaScript, and Python,FastAPI. Features Companey registration,  employee management, attendance tracking, and leave-management processing , Emailsending.',
      tech: ['React', 'Vite', 'JavaScript', 'Python', 'FastAPI'],
      github: 'https://github.com/jyoti602/human-resource-ui',
      demo: 'https://hrms-ui.netlify.app/',
    },
  ]

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'], icon: Code },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'FastAPI', 'MySQL'], icon: Globe },
    {
      category: 'Tools & Others',
      items: ['Git', 'VS Code', 'Netlify', 'Render', 'Responsive Design'],
      icon: Palette,
    },
    { category: 'AI Tools', items: ['ChatGPT', 'Cursor', 'Windsurf'], icon: Smartphone },
  ]

  return (
    <div>
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <HeroSection
        onGetInTouch={() => {
          const el = document.getElementById('contact')
          el?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <AboutSection />

      <ProjectsSection projects={projects} />

      <CertificationsSection onSelectImage={(src) => setSelectedImage(src)} />

      <SkillsSection skills={skills} />

      <ContactSection />

      <Footer />

      {selectedImage && <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}
