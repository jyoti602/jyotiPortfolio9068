import { Menu, X } from 'lucide-react'

export default function Navbar({ isMenuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <div className="nav__brand">My Portfolio</div>

        <div className="nav__links">
          <a className="nav__link" href="#home">Home</a>
          <a className="nav__link" href="#about">About</a>
          <a className="nav__link" href="#projects">Projects</a>
          <a className="nav__link" href="#certifications">Certifications</a>
          <a className="nav__link" href="#skills">Skills</a>
          <a className="nav__link" href="#contact">Contact</a>
        </div>

        <button className="nav__toggle" type="button" onClick={onToggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="nav__mobile">
          <div className="container nav__mobileInner" onClick={onCloseMenu}>
            <a className="nav__mobileLink" href="#home">Home</a>
            <a className="nav__mobileLink" href="#about">About</a>
            <a className="nav__mobileLink" href="#projects">Projects</a>
            <a className="nav__mobileLink" href="#certifications">Certifications</a>
            <a className="nav__mobileLink" href="#skills">Skills</a>
            <a className="nav__mobileLink" href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
