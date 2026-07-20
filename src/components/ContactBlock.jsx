import { DocLink } from './DocLink.jsx';

export function ContactBlock({ content, copy }) {
  return (
    <section className="doc-section" id="contact" aria-labelledby="contact-title">
      <header className="section-header">
        <p className="section-kicker">
          <span className="mono">{copy.number}</span> / {copy.title}
        </p>
        <h2 id="contact-title">{copy.title}</h2>
        <p className="section-lede">{copy.body}</p>
      </header>
      <ul className="contact-list">
        <li>
          <span className="meta-key">Email</span>
          <DocLink href={content.mailto}>{content.email}</DocLink>
        </li>
        <li>
          <span className="meta-key">GitHub</span>
          <DocLink href={content.github} external>
            {content.githubLabel}
          </DocLink>
        </li>
        <li>
          <span className="meta-key">Portfolio</span>
          <DocLink href={content.portfolio} external>
            {content.portfolio}
          </DocLink>
        </li>
        <li>
          <span className="meta-key">Resume</span>
          <DocLink href={content.resumeHref} external>
            {content.resumeLabel}
          </DocLink>
        </li>
      </ul>
    </section>
  );
}
