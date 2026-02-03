export default function HeroSection({ onGetInTouch }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div>
            <h1 className="hero__title">
              Hi, I'm <span className="hero__gradientText">Jyoti</span>
            </h1>
            <p className="hero__subtitle">Full Stack Aspirant Web Developer</p>
            <p className="hero__desc">
              I'm a passionate Full Stack Web Developer skilled in HTML, CSS, JavaScript, React.js,
              Node.js, MySQL, Python, and Java. I enjoy creating responsive, user-friendly interfaces
              and working on full-stack solutions that combine frontend and backend technologies.
            </p>

            <div className="hero__actions">
              <button type="button" className="btn btn--primary" onClick={onGetInTouch}>
                Get In Touch
              </button>
              <a className="btn btn--outline" href="#projects">View My Work</a>
            </div>
          </div>

          <div>
            <div className="hero__imageWrap">
              <img className="hero__image" src="/mypro.jpg" alt="Jyoti - Full Stack Developer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
