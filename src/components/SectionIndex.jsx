import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 1024px)';

export function SectionIndex({ items }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;

      if (!media.matches) {
        setHidden(false);
        lastY = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) < 6) {
        return;
      }

      if (currentY <= 24) {
        setHidden(false);
      } else if (delta > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    const onMediaChange = () => {
      if (!media.matches) {
        setHidden(false);
      }

      lastY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    media.addEventListener('change', onMediaChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      media.removeEventListener('change', onMediaChange);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <nav
      className={`section-index${hidden ? ' is-hidden' : ''}`}
      aria-label="Document sections"
      data-hidden={hidden ? 'true' : 'false'}
    >
      <ol className="section-index-list">
        {items.map((item) => (
          <li key={item.id}>
            <a className="section-index-link" href={`#${item.id}`}>
              <span className="section-index-number">{item.number}</span>
              <span className="section-index-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
