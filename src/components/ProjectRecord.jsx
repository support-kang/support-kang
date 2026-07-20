export function ProjectRecord({ record }) {
  return (
    <article className="project-record" aria-labelledby={`${record.id}-title`}>
      <div className="project-record-meta">
        <p className="mono project-id">{record.id}</p>
        <p className="mono">{record.period}</p>
        <p className="mono status-accent">{record.status}</p>
        <dl className="project-meta-list">
          <div>
            <dt>Role</dt>
            <dd>{record.role}</dd>
          </div>
          <div>
            <dt>Environment</dt>
            <dd>{record.stack}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{record.scope}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{record.team}</dd>
          </div>
          <div>
            <dt>Org</dt>
            <dd>{record.company}</dd>
          </div>
        </dl>
      </div>

      <div className="project-record-body">
        <h3 id={`${record.id}-title`}>{record.name}</h3>
        {record.keyFeatures?.length ? (
          <div className="record-block">
            <p className="meta-key">Key capabilities</p>
            <ul className="feature-list">
              {record.keyFeatures.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong>
                  <p>{feature.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="record-block">
          <p className="meta-key">Problem</p>
          <p>{record.problem}</p>
        </div>
        <div className="record-block">
          <p className="meta-key">Technical decision</p>
          <p>{record.decision}</p>
        </div>
        <div className="record-block">
          <p className="meta-key">Outcome</p>
          <p>{record.outcome}</p>
        </div>
      </div>
    </article>
  );
}
