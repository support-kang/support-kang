import type { ExperienceItem } from '../data/portfolioData';
import type { SectionCopyBlock } from '../data/textContent';
import { SectionHeader } from './SectionHeader';

interface ExperienceProps {
  items: ExperienceItem[];
  copy: SectionCopyBlock;
}

export function Experience({ items, copy }: ExperienceProps) {
  return (
    <section className="page-section section-shell" id="experience" aria-labelledby="experience-title">
      <SectionHeader copy={copy} titleId="experience-title" />
      <ol className="experience-timeline">
        {items.map((item) => (
          <li className={item.subdued ? 'is-subdued' : ''} key={`${item.company}-${item.period}`}>
            <p className="experience-period">{item.period}</p>
            <div className="experience-content">
              <p className="experience-company">{item.company}</p>
              <h3>{item.publicRole}</h3>
              <p>{item.summary}</p>
              <ul className="experience-responsibilities">
                {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
              <p className="experience-technologies">{item.technologies.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
