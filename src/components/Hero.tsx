import type { CareerStage, ContactContent, HeroContent } from '../data/textContent';
import { ExternalLink } from './ExternalLink';

interface CareerTrajectoryProps {
  items: CareerStage[];
}

interface SystemFlowProps {
  items: string[];
}

interface HeroProps {
  content: HeroContent;
  contact: ContactContent;
}

function CareerTrajectory({ items }: CareerTrajectoryProps) {
  return (
    <ol className="career-trajectory" aria-label="Career trajectory">
      {items.map((item, index) => (
        <li key={item.stage}>
          <span className="trajectory-index" aria-hidden="true">0{index + 1}</span>
          <div>
            <strong>{item.stage}</strong>
            <span>{item.technologies}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SystemFlow({ items }: SystemFlowProps) {
  return (
    <div className="system-flow" aria-labelledby="system-flow-title">
      <p className="mono-label" id="system-flow-title">SYSTEM RANGE</p>
      <ol>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ol>
    </div>
  );
}

export function Hero({ content, contact }: HeroProps) {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-name">{content.name}</p>
        <h1 id="hero-title">{content.role}</h1>
        <p className="hero-statement">{content.statement}</p>
        <ul className="hero-stack" aria-label="Core technologies">
          {content.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="hero-actions">
          <ExternalLink className="button button-primary" href={contact.resumeHref}>Resume</ExternalLink>
          <ExternalLink className="button button-secondary" href={contact.github}>GitHub</ExternalLink>
        </div>
      </div>
      <SystemFlow items={content.systemFlow} />
      <CareerTrajectory items={content.trajectory} />
    </section>
  );
}
