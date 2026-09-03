import type { ContactContent, NavigationItem } from '../data/textContent';
import { ExternalLink } from './ExternalLink';

interface HeaderProps {
  navigation: NavigationItem[];
  contact: ContactContent;
}

export function Header({ navigation, contact }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Kang Jiwon, page top">
          KANG JIWON
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ExternalLink href={contact.github}>GitHub</ExternalLink>
          <ExternalLink className="header-resume" href={contact.resumeHref}>Resume</ExternalLink>
        </div>
      </div>
    </header>
  );
}
