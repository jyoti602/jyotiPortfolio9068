import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>

        <div className="grid">
          {projects.map((project) => (
            <div key={project.title} className="card card--hover project">
              <div className="project__media">
                {project.title === 'Hospital Management System' ? (
                  <img className="project__img" src="/hms.png" alt="Hospital Management System" />
                ) : project.title === 'Republic Day Web Project' ? (
                  <img className="project__img" src="/republic.png" alt="Republic Day Web Project" />
                ) : project.title === 'College Website' ? (
                  <img className="project__img" src="/colleg.png" alt="College Website" />
                ) : (
                  <div className="project__img" />
                )}
              </div>

              <div className="project__body">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.description}</p>

                <div className="tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="links">
                  <a className="link" href={project.github} target="_blank" rel="noreferrer">
                    <Github size={18} />
                    Code
                  </a>
                  <a className="link" href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
