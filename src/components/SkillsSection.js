export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills & Expertise</h2>

        <div className="skills__grid">
          {skills.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.category} className="card card--hover skill">
                <div className="skill__head">
                  <Icon className="skill__icon" size={22} />
                  <h3 className="skill__title">{group.category}</h3>
                </div>

                <ul className="skill__list">
                  {group.items.map((item) => (
                    <li key={item} className="skill__item">
                      <span className="skill__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
