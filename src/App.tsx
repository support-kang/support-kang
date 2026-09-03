import { Contact } from './components/Contact';
import { EngineeringApproach } from './components/EngineeringApproach';
import { Experience } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OtherProjects } from './components/OtherProjects';
import { TechnicalFocus } from './components/TechnicalFocus';
import {
  engineeringPrinciples,
  experience,
  featuredProjects,
  otherProjects,
  technicalFocus,
} from './data/portfolioData';
import { contact, hero, navigation, sectionCopy } from './data/textContent';

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header navigation={navigation} contact={contact} />
      <main id="main-content">
        <Hero content={hero} contact={contact} />
        <FeaturedProjects projects={featuredProjects} copy={sectionCopy.selectedWork} />
        <Experience items={experience} copy={sectionCopy.experience} />
        <TechnicalFocus focus={technicalFocus} copy={sectionCopy.technicalFocus} />
        <OtherProjects projects={otherProjects} copy={sectionCopy.otherWork} />
        <EngineeringApproach
          principles={engineeringPrinciples}
          copy={sectionCopy.engineeringApproach}
        />
        <Contact content={contact} copy={sectionCopy.contact} />
      </main>
      <footer className="site-footer section-shell">
        <p>KANG JIWON</p>
        <p>Enterprise Application Developer · Seoul</p>
      </footer>
    </div>
  );
}

export default App;
