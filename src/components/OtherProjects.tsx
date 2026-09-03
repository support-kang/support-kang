import type { ProjectRecord } from '../data/portfolioData';
import type { SectionCopyBlock } from '../data/textContent';
import { SectionHeader } from './SectionHeader';

interface OtherProjectsProps {
  projects: ProjectRecord[];
  copy: SectionCopyBlock;
}

export function OtherProjects({ projects, copy }: OtherProjectsProps) {
  return (
    <section className="page-section section-shell" id="other-work" aria-labelledby="other-work-title">
      <SectionHeader copy={copy} titleId="other-work-title" />
      <ol className="other-projects">
        {projects.map((project) => (
          <li key={project.id}>
            <p className="other-period">{project.period}</p>
            <div>
              <p className="other-domain">{project.displayClient} · {project.domain}</p>
              <h3>{project.displayTitle}</h3>
              <p>{project.shortSummary}</p>
              <p className="other-stack">{project.stack}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
