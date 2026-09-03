import type { SectionCopyBlock } from '../data/textContent';

interface SectionHeaderProps {
  copy: SectionCopyBlock;
  titleId: string;
}

export function SectionHeader({ copy, titleId }: SectionHeaderProps) {
  return (
    <header className="section-heading">
      <p className="section-eyebrow">{copy.eyebrow}</p>
      <h2 id={titleId}>{copy.title}</h2>
      <p>{copy.body}</p>
    </header>
  );
}
