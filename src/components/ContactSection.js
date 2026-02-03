import { Download, Github, Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>

        <div className="card contact__card">
          <p className="contact__desc">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>

          <div className="contact__grid">
            <div className="contactItem">
              <Mail className="contactItem__icon" size={22} />
              <div>
                <p className="contactItem__title">Email</p>
                <p className="contactItem__value">jyotibisht12300@gmail.com</p>
              </div>
            </div>

            <a className="contactItem" href="https://github.com/jyoti602" target="_blank" rel="noreferrer">
              <Github className="contactItem__icon" size={22} />
              <div>
                <p className="contactItem__title">GitHub</p>
                <p className="contactItem__value">github.com/jyoti602</p>
              </div>
            </a>

            <a
              className="contactItem"
              href="https://www.linkedin.com/in/jyoti-22abb3324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="contactItem__icon" size={22} />
              <div>
                <p className="contactItem__title">LinkedIn</p>
                <p className="contactItem__value">linkedin.com/in/jyoti-22abb3324</p>
              </div>
            </a>

            <a className="contactItem" href="/resume.pdf" download="Jyoti_Resume.pdf">
              <Download className="contactItem__icon" size={22} />
              <div>
                <p className="contactItem__title">Resume</p>
                <p className="contactItem__value">Download PDF</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
