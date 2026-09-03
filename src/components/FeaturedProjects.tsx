import type { ProjectRecord } from '../data/portfolioData';
import type { SectionCopyBlock } from '../data/textContent';
import { SectionHeader } from './SectionHeader';

interface ArchitectureProps {
  nodes: string[];
}

interface ProjectProps {
  project: ProjectRecord;
}

interface FeaturedProjectProps extends ProjectProps {
  index: number;
}

interface FeaturedProjectsProps {
  projects: ProjectRecord[];
  copy: SectionCopyBlock;
}

function Architecture({ nodes }: ArchitectureProps) {
  if (!nodes.length) return null;

  return (
    <div className="project-architecture">
      <p className="mono-label">SYSTEM FLOW</p>
      <ol aria-label="Project architecture flow">
        {nodes.map((node) => <li key={node}>{node}</li>)}
      </ol>
    </div>
  );
}

function ProjectDetails({ project }: ProjectProps) {
  const details: Array<[string, string]> = [
    ['Problem', project.problem],
    ['Technical Decision', project.decision],
    ['Outcome', project.outcome],
  ];

  return (
    <div className="project-details">
      {details.map(([label, body]) => (
        <details key={label} open>
          <summary>{label}</summary>
          <p>{body}</p>
        </details>
      ))}
    </div>
  );
}

function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const titleId = `featured-project-${index + 1}-title`;
  const stack = project.stack.split(',').map((item) => item.trim());

  return (
    <article className="featured-project" aria-labelledby={titleId}>
      <div className="project-intro">
        <p className="project-index" aria-hidden="true">0{index + 1}</p>
        <div className="project-heading">
          <p className="project-domain">{project.displayClient} · {project.domain}</p>
          <h3 id={titleId}>{project.displayTitle}</h3>
          <p className="project-summary">{project.shortSummary}</p>
          <dl className="project-ownership">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Scope</dt><dd>{project.scope}</dd></div>
            <div><dt>Period</dt><dd>{project.period}</dd></div>
            <div><dt>Team</dt><dd>{project.team.replace(project.company, '소속 조직')}</dd></div>
          </dl>
          <div className="decision-result">
            <p><span>Decision</span>{project.decisionSummary}</p>
            <p><span>Result</span>{project.resultSummary}</p>
          </div>
        </div>
      </div>

      <div className="project-content-grid">
        <div className="project-capabilities">
          <p className="mono-label">KEY CAPABILITIES</p>
          <ul className="capability-list">
            {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </div>
        <Architecture nodes={project.architecture} />
      </div>

      <ProjectDetails project={project} />

      <footer className="project-footer">
        <ul className="stack-list" aria-label="Project technologies">
          {stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </footer>
    </article>
  );
}

export function FeaturedProjects({ projects, copy }: FeaturedProjectsProps) {
  return (
    <section className="page-section section-shell" id="selected-work" aria-labelledby="selected-work-title">
      <SectionHeader copy={copy} titleId="selected-work-title" />
      <div className="featured-projects">
        {projects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
