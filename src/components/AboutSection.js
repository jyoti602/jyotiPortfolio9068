export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About Me</h2>

        <div className="card about__card">
          <p className="about__text">
            I'm a passionate Full Stack Web Developer continuously learning and improving my skills by building
            real-world web applications. I enjoy creating responsive, user-friendly interfaces and working on
            full-stack solutions that combine frontend and backend technologies. I have worked on projects such as
            a Hospital Management System, College Website, and creative web pages using modern development tools.
          </p>
          <p className="about__text">
            I am passionate about learning new technologies, improving problem-solving skills, and growing as a
            developer. I am currently looking for opportunities to apply my skills, gain industry experience, and
            contribute to meaningful projects.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="stat__value">3+</div>
              <div className="stat__label">Real Projects</div>
            </div>
            <div className="stat">
              <div className="stat__value">8+</div>
              <div className="stat__label">Technologies</div>
            </div>
            <div className="stat">
              <div className="stat__value">Continuous</div>
              <div className="stat__label">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
