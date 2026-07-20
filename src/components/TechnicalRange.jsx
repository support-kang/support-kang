export function TechnicalRange({ groups, copy }) {
  return (
    <section className="doc-section" id="technical-range" aria-labelledby="technical-range-title">
      <header className="section-header">
        <p className="section-kicker">
          <span className="mono">{copy.number}</span> / {copy.title}
        </p>
        <h2 id="technical-range-title">{copy.title}</h2>
        <p className="section-lede">{copy.body}</p>
      </header>
      <div className="range-grid">
        {groups.map((group) => (
          <div className="range-group" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
