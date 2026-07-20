export function EngineeringNotes({ notes, experience, copy }) {
  return (
    <section className="doc-section" id="engineering-notes" aria-labelledby="engineering-notes-title">
      <header className="section-header">
        <p className="section-kicker">
          <span className="mono">{copy.number}</span> / {copy.title}
        </p>
        <h2 id="engineering-notes-title">{copy.title}</h2>
        <p className="section-lede">{copy.body}</p>
      </header>
      <div className="notes-grid">
        <div className="body-copy">
          {notes.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="meta-key">Employment</p>
          <ul className="employment-list">
            {experience.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <div className="employment-head">
                  <strong>{item.company}</strong>
                  <span className="mono">{item.period}</span>
                </div>
                <p>{item.role}</p>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="notes-aside">
          <p className="meta-key">Education</p>
          <p>{notes.education}</p>
          <p className="meta-key">Credentials</p>
          <ul className="credential-list">
            {notes.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
