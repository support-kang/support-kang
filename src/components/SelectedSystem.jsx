import { BulletList } from './BulletList.jsx';

export function SelectedSystem({ system }) {
  return (
    <article className="selected-system" id={system.anchorId || system.id.toLowerCase()}>
      <header className="selected-system-head">
        <div className="selected-system-meta">
          <p className="mono system-id">{system.id}</p>
          <p className="mono">{system.period}</p>
          <p className="mono status-accent">{system.status}</p>
        </div>
        <div>
          <h3>{system.name}</h3>
          <p className="system-role">{system.role}</p>
          <p className="system-stack">{system.stack}</p>
          <p className="system-team">Team: {system.team}</p>
        </div>
      </header>

      <p className="system-summary">{system.summary}</p>

      <div className="selected-system-body">
        <div>
          <p className="meta-key">Scope</p>
          <BulletList items={system.highlights} />
        </div>
        <div className="body-copy">
          {system.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {system.serviceUrl ? (
            <p>
              Service reference:{' '}
              <a className="doc-link" href={system.serviceUrl} target="_blank" rel="noreferrer">
                {system.serviceUrl.replace(/^https?:\/\//, '')}
              </a>
            </p>
          ) : null}
        </div>
      </div>

      <div className={`evidence-grid${system.galleryClassName ? ` ${system.galleryClassName}` : ''}`}>
        {system.gallery.map((item) => (
          <figure className="evidence-item" key={item.image}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <figcaption>
              <strong>{item.title}</strong>
              <p>{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
