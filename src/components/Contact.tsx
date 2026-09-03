import type { ContactContent, SectionCopyBlock } from '../data/textContent';
import { ExternalLink } from './ExternalLink';
import { SectionHeader } from './SectionHeader';

interface ContactProps {
  content: ContactContent;
  copy: SectionCopyBlock;
}

export function Contact({ content, copy }: ContactProps) {
  return (
    <section className="page-section contact section-shell" id="contact" aria-labelledby="contact-title">
      <SectionHeader copy={copy} titleId="contact-title" />
      <ul className="contact-links">
        <li><span>Email</span><a href={content.mailto}>{content.email}</a></li>
        <li><span>GitHub</span><ExternalLink href={content.github}>{content.githubLabel}</ExternalLink></li>
        <li><span>Resume</span><ExternalLink href={content.resumeHref}>{content.resumeLabel}</ExternalLink></li>
      </ul>
    </section>
  );
}
