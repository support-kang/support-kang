import type { EngineeringPrinciple } from '../data/portfolioData';
import type { SectionCopyBlock } from '../data/textContent';
import { SectionHeader } from './SectionHeader';

interface EngineeringApproachProps {
  principles: EngineeringPrinciple[];
  copy: SectionCopyBlock;
}

export function EngineeringApproach({ principles, copy }: EngineeringApproachProps) {
  return (
    <section className="page-section section-shell" id="engineering-approach" aria-labelledby="engineering-approach-title">
      <SectionHeader copy={copy} titleId="engineering-approach-title" />
      <ol className="principles">
        {principles.map((principle, index) => (
          <li key={principle.title}>
            <p className="principle-index" aria-hidden="true">0{index + 1}</p>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
