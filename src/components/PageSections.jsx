import { BulletList } from './BulletList.jsx';
import { SectionHeading } from './SectionHeading.jsx';

export function HeroSection({ content }) {
  return (
    <header className="hero hero-enter">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1>{content.name}</h1>
      <p className="hero-title">{content.title}</p>
      <p className="lead">{content.lead}</p>
      <div className="hero-actions">
        <a className="primary-link" href={content.primaryAction.href}>
          {content.primaryAction.label}
        </a>
        <a
          className="secondary-link"
          href={content.secondaryAction.href}
          target="_blank"
          rel="noreferrer"
        >
          {content.secondaryAction.label}
        </a>
      </div>
      <ul className="summary-list">
        {content.summaryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </header>
  );
}

export function IntroSection({ content }) {
  return (
    <section className="section section-split">
      <div>
        <p className="section-label">{content.label}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="body-copy">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection({ title, items }) {
  return (
    <section className="section">
      <SectionHeading label={title.label} title={title.title} />
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-head">
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>
            <p className="timeline-summary">{item.summary}</p>
            <BulletList items={item.highlights} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function EnterpriseProjectsSection({ content, projects }) {
  return (
    <section className="section">
      <SectionHeading
        label={content.label}
        title={content.title}
        body={content.body}
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card-head">
              <h3>{project.name}</h3>
              <span>{project.period}</span>
            </div>
            <p>{project.impact}</p>
            <small>{project.stack}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection({ skillsContent, educationContent, skills, certifications }) {
  return (
    <section className="section section-split">
      <div>
        <p className="section-label">{skillsContent.label}</p>
        <h2>{skillsContent.title}</h2>
        <div className="chip-wrap">
          {skills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="section-label">{educationContent.label}</p>
        <h2>{educationContent.title}</h2>
        <p className="education-copy">{educationContent.copy}</p>
        <BulletList items={certifications} />
      </div>
    </section>
  );
}
