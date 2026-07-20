import { ContactBlock } from './components/ContactBlock.jsx';
import { EngineeringNotes } from './components/EngineeringNotes.jsx';
import { IdentificationBlock } from './components/IdentificationBlock.jsx';
import { ProjectRecord } from './components/ProjectRecord.jsx';
import { SectionIndex } from './components/SectionIndex.jsx';
import { SelectedSystem } from './components/SelectedSystem.jsx';
import { TechnicalRange } from './components/TechnicalRange.jsx';
import {
  engineeringNotes,
  projectRecords,
  selectedSystems,
  technicalRange,
} from './data/portfolioData.js';
import {
  contact,
  identification,
  sectionCopy,
  sectionIndex,
} from './data/textContent.js';

function App() {
  return (
    <div className="doc-shell">
      <a className="skip-link" href="#identification">
        Skip to content
      </a>

      <SectionIndex items={sectionIndex} />

      <main className="doc-main">
        <IdentificationBlock content={identification} />

        <section
          className="doc-section"
          id="selected-systems"
          aria-labelledby="selected-systems-title"
        >
          <header className="section-header">
            <p className="section-kicker">
              <span className="mono">{sectionCopy.selectedSystems.number}</span> /{' '}
              {sectionCopy.selectedSystems.title}
            </p>
            <h2 id="selected-systems-title">{sectionCopy.selectedSystems.title}</h2>
            <p className="section-lede">{sectionCopy.selectedSystems.body}</p>
          </header>
          <div className="selected-systems-list">
            {selectedSystems.map((system) => (
              <SelectedSystem key={system.id} system={system} />
            ))}
          </div>
        </section>

        <section
          className="doc-section"
          id="project-records"
          aria-labelledby="project-records-title"
        >
          <header className="section-header">
            <p className="section-kicker">
              <span className="mono">{sectionCopy.projectRecords.number}</span> /{' '}
              {sectionCopy.projectRecords.title}
            </p>
            <h2 id="project-records-title">{sectionCopy.projectRecords.title}</h2>
            <p className="section-lede">{sectionCopy.projectRecords.body}</p>
          </header>
          <div className="project-records-list">
            {projectRecords.map((record) => (
              <ProjectRecord key={record.id} record={record} />
            ))}
          </div>
        </section>

        <TechnicalRange groups={technicalRange} copy={sectionCopy.technicalRange} />
        <EngineeringNotes notes={engineeringNotes} copy={sectionCopy.engineeringNotes} />
        <ContactBlock content={contact} copy={sectionCopy.contact} />
      </main>
    </div>
  );
}

export default App;
