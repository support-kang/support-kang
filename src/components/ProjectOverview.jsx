import { Reveal } from './Reveal.jsx';

export function ProjectOverview({ items }) {
  return (
    <div className="project-overview">
      {items.map((item, index) => (
        <Reveal as="div" key={item.label} delay={index * 70}>
          <p className="meta-label">{item.label}</p>
          {item.link ? (
            <p>
              <a href={item.link.href} target="_blank" rel="noreferrer">
                {item.link.label}
              </a>
            </p>
          ) : (
            <p>{item.value}</p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
