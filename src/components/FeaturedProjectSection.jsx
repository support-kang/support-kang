import { BulletList } from './BulletList.jsx';
import { Gallery } from './Gallery.jsx';
import { ProjectOverview } from './ProjectOverview.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionHeading } from './SectionHeading.jsx';

export function FeaturedProjectSection({
  id,
  project,
  highlights,
  galleryItems,
  galleryClassName,
}) {
  return (
    <section className="section" id={id}>
      <Reveal>
        <SectionHeading
          label={project.label}
          title={project.title}
          body={project.body}
        />
      </Reveal>

      <ProjectOverview items={project.overview} />

      <div className="section-split project-copy">
        <div>
          <p className="meta-label">주요 업무</p>
          <BulletList items={highlights} />
        </div>
        <div className="body-copy">
          {project.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <Gallery items={galleryItems} className={galleryClassName} />
    </section>
  );
}
