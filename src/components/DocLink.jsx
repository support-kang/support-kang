export function DocLink({ href, children, external = false, className = '' }) {
  const props = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <a className={`doc-link${className ? ` ${className}` : ''}`} href={href} {...props}>
      {children}
    </a>
  );
}
