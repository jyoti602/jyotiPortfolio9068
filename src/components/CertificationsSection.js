export default function CertificationsSection({ onSelectImage }) {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Certifications & Achievements</h2>

        <div className="certs__grid">
          <div className="card card--hover">
            <div className="cert__media" onClick={() => onSelectImage('/certificate.png')} role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelectImage('/certificate.png') }}>
              <img className="cert__img" src="/certificate.png" alt="Competition Certificate" />
            </div>
            <div className="cert__body">
              <h3 className="cert__title">Competition Winner</h3>
              <p className="cert__meta">web development</p>
              <div className="cert__year">2026</div>
            </div>
          </div>

          <div className="card card--hover">
            <div className="cert__media" onClick={() => onSelectImage('/traning certificate.png')} role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelectImage('/traning certificate.png') }}>
              <img className="cert__img" src="/traning certificate.png" alt="Industrial Training Certificate" />
            </div>
            <div className="cert__body">
              <h3 className="cert__title">Industrial Training</h3>
              <p className="cert__meta">Full-stack development training</p>
              <div className="cert__year">2025</div>
            </div>
          </div>

          <div className="card card--hover">
            <div className="cert__media" onClick={() => onSelectImage('/Web Development Certificate.png')} role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelectImage('/Web Development Certificate.png') }}>
              <img className="cert__img" src="/Web Development Certificate.png" alt="Web Development Certificate" />
            </div>
            <div className="cert__body">
              <h3 className="cert__title">Web Development</h3>
              <p className="cert__meta">Modern web technologies</p>
              <div className="cert__year">2025</div>
            </div>
          </div>

          <div className="card card--hover">
            <div className="cert__media" onClick={() => onSelectImage('/artificial intelligenc work shop.png')} role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelectImage('/artificial intelligenc work shop.png') }}>
              <img className="cert__img" src="/artificial intelligenc work shop.png" alt="AI Workshop Certificate" />
            </div>
            <div className="cert__body">
              <h3 className="cert__title">AI Workshop</h3>
              <p className="cert__meta">Artificial Intelligence training</p>
              <div className="cert__year">2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
