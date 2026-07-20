export function SectionIndex({ items }) {
  return (
    <nav className="section-index" aria-label="Document sections">
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
