import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2024 Jyoti. All rights reserved.</p>
        <div className="footer__links">
          <a className="footer__link" href="https://github.com/jyoti602" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/jyoti-22abb3324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a className="footer__link" href="mailto:jyotibisht12300@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
