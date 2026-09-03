import type { TechnicalFocusData } from '../data/portfolioData';
import type { SectionCopyBlock } from '../data/textContent';
import { SectionHeader } from './SectionHeader';

interface TechnicalFocusProps {
  focus: TechnicalFocusData;
  copy: SectionCopyBlock;
}

export function TechnicalFocus({ focus, copy }: TechnicalFocusProps) {
  return (
    <section className="page-section section-shell" id="technical-focus" aria-labelledby="technical-focus-title">
      <SectionHeader copy={copy} titleId="technical-focus-title" />
      <div className="technical-focus-grid">
        <div className="focus-core">
          <p className="mono-label">CORE</p>
          {focus.core.map((group) => (
            <div className="focus-group" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
        <div className="focus-working">
          <p className="mono-label">DELIVERY / WORKING KNOWLEDGE</p>
          <ul>
            {focus.working.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
