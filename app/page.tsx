'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Smartphone, Globe } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A comprehensive hospital management system built with React, JavaScript, and Node.js. Features patient management, appointment scheduling, and administrative dashboard.',
      tech: ['React', 'JavaScript', 'Node.js', 'MySQL'],
      github: 'https://github.com/jyoti602/hospital-management-system',
      demo: 'https://hms-ui-by-jyoti.netlify.app/',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Republic Day Web Project',
      description: 'A creative web project celebrating India\'s Republic Day with interactive features, animations, and responsive design using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/jyoti602/republic-day-web-page',
      demo: 'https://republic-day-india-by-jyoti.netlify.app/',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'College Website',
      description: 'A complete college website built with React, JavaScript, and Python FastAPI backend. Features dynamic content management and responsive design.',
      tech: ['React', 'JavaScript', 'Python', 'FastAPI'],
      github: 'https://github.com/jyoti602/ggp_almora_college_ui',
      demo: 'https://ggp-almora-college.onrender.com/',
      image: '/api/placeholder/600/400'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'], icon: Code },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'FastAPI', 'MySQL'], icon: Globe },
    { category: 'Tools & Others', items: ['Git', 'VS Code', 'Netlify', 'Render', 'Responsive Design'], icon: Palette },
    { category: 'AI Tools', items: ['ChatGPT', 'Cursor', 'Windsurf'], icon: Smartphone }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-sky-600 backdrop-blur-md z-50 border-b border-sky-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">jyotiPortfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-sky-200 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-sky-200 transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-sky-200 transition-colors">Projects</a>
              <a href="#certifications" className="text-white hover:text-sky-200 transition-colors">Certifications</a>
              <a href="#skills" className="text-white hover:text-sky-200 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-sky-200 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-sky-700 border-t border-sky-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-sky-200">Home</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-sky-200">About</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-sky-200">Projects</a>
              <a href="#certifications" className="block px-3 py-2 text-white hover:text-sky-200">Certifications</a>
              <a href="#skills" className="block px-3 py-2 text-white hover:text-sky-200">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-sky-200">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="gradient-text">Jyoti</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Full Stack Aspirant Web Developer
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl">
                I'm a passionate Full Stack Web Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, MySQL, Python, and Java.
                I enjoy creating responsive, user-friendly interfaces and working on full-stack solutions that combine frontend and backend technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View My Work
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center p-4">
                <img 
                  src="/mypro.jpg" 
                  alt="Jyoti - Full Stack Developer" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Web Developer continuously learning and improving my skills by building real-world web applications.
              I enjoy creating responsive, user-friendly interfaces and working on full-stack solutions that combine frontend and backend technologies.
              I have worked on projects such as a Hospital Management System, College Website, and creative web pages using modern development tools.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I am passionate about learning new technologies, improving problem-solving skills, and growing as a developer.
              I am currently looking for opportunities to apply my skills, gain industry experience, and contribute to meaningful projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600">Real Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Continuous</div>
                <div className="text-gray-600">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 relative overflow-hidden">
                  {project.title === 'Hospital Management System' ? (
                    <img 
                      src="/hms.png" 
                      alt="Hospital Management System" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === 'Republic Day Web Project' ? (
                    <img 
                      src="/republic.png" 
                      alt="Republic Day Web Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === 'College Website' ? (
                    <img 
                      src="/colleg.png" 
                      alt="College Website" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-3xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                        <div className="text-sm opacity-90">{project.tech[0]}</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-40 bg-gradient-to-br from-sky-400 to-sky-600 relative cursor-pointer" onClick={() => setSelectedImage('/certificate.png')}>
                <img 
                  src="/certificate.png" 
                  alt="Competition Certificate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competition Winner</h3>
                <p className="text-gray-600 text-sm mb-2">web development</p>
                <div className="text-xs text-sky-600 font-medium">2026</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-40 bg-gradient-to-br from-sky-400 to-sky-600 relative cursor-pointer" onClick={() => setSelectedImage('/traning certificate.png')}>
                <img 
                  src="/traning certificate.png" 
                  alt="Industrial Training Certificate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industrial Training</h3>
                <p className="text-gray-600 text-sm mb-2">Full-stack development training</p>
                <div className="text-xs text-sky-600 font-medium">2025</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-40 bg-gradient-to-br from-sky-400 to-sky-600 relative cursor-pointer" onClick={() => setSelectedImage('/Web Development Certificate.png')}>
                <img 
                  src="/Web Development Certificate.png" 
                  alt="Web Development Certificate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
                <p className="text-gray-600 text-sm mb-2">Modern web technologies</p>
                <div className="text-xs text-sky-600 font-medium">2025</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-40 bg-gradient-to-br from-sky-400 to-sky-600 relative cursor-pointer" onClick={() => setSelectedImage('/artificial intelligenc work shop.png')}>
                <img 
                  src="/artificial intelligenc work shop.png" 
                  alt="AI Workshop Certificate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Workshop</h3>
                <p className="text-gray-600 text-sm mb-2">Artificial Intelligence training</p>
                <div className="text-xs text-sky-600 font-medium">2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                  <div className="flex items-center mb-4">
                    <Icon size={24} className="text-primary-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-600 text-center mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Mail size={24} className="text-primary-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">jyotibisht12300@gmail.com</div>
                </div>
              </div>
              <a
                href="https://github.com/jyoti602"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Github size={24} className="text-primary-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">GitHub</div>
                  <div className="text-gray-600">github.com/jyoti602</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/jyoti-22abb3324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={24} className="text-primary-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">LinkedIn</div>
                  <div className="text-gray-600">linkedin.com/in/jyoti-22abb3324</div>
                </div>
              </a>
              <a
                href="/resume.pdf"
                download="Jyoti_Resume.pdf"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Download size={24} className="text-primary-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Resume</div>
                  <div className="text-gray-600">Download PDF</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">
            © 2024 Jyoti. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/jyoti602" className="hover:text-sky-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jyoti-22abb3324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-sky-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jyotibisht12300@gmail.com" className="hover:text-sky-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
