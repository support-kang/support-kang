import { Reveal } from './Reveal.jsx';

export function Gallery({ items, className = '' }) {
  const galleryClassName = className ? `gallery-grid ${className}` : 'gallery-grid';

  return (
    <div className={galleryClassName}>
      {items.map((item, index) => (
        <Reveal
          as="figure"
          className="gallery-card"
          key={item.title}
          delay={index * 70}
        >
          <img src={item.image} alt={item.title} loading="lazy" />
          <figcaption>
            <strong>{item.title}</strong>
            <p>{item.caption}</p>
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
