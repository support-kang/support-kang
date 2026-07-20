export function IdentificationBlock({ content }) {
  return (
    <section className="doc-section identification" id="identification" aria-labelledby="identification-title">
      <p className="section-kicker">
        <span className="mono">01</span> / Identification
      </p>
      <h1 id="identification-title" className="identity-name">
        {content.name}
      </h1>
      <p className="identity-title">{content.title}</p>
      <p className="identity-focus">{content.focusLine}</p>
      <dl className="identity-meta">
        <div>
          <dt>Location</dt>
          <dd>{content.location}</dd>
        </div>
        <div>
          <dt>Revision</dt>
          <dd className="mono">{content.revision}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd className="mono status-accent">{content.status}</dd>
        </div>
      </dl>
      <p className="identity-summary">{content.summary}</p>
    </section>
  );
}
