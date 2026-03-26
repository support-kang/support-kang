import { useEffect, useRef, useState } from 'react';

export function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  threshold = 0.02,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const revealClassName = `reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`;

  return (
    <Component
      ref={ref}
      className={revealClassName}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}

