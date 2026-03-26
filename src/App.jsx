import { FeaturedProjectSection } from './components/FeaturedProjectSection.jsx';
import {
  EnterpriseProjectsSection,
  ExperienceSection,
  HeroSection,
  IntroSection,
  SkillsSection,
} from './components/PageSections.jsx';
import {
  certifications,
  enterpriseProjects,
  experience,
  favorfitHighlights,
  favorfitShots,
  keepayHighlights,
  keepayShots,
  skills,
} from './data/portfolioData.js';
import { heroContent, introContent, projectsText } from './data/textContent.js';

function App() {
  return (
    <div className="page-shell">
      <HeroSection content={heroContent} />

      <main>
        <IntroSection content={introContent} />
        <ExperienceSection title={projectsText.experience} items={experience} />

        <FeaturedProjectSection
          id="project-favorfit"
          project={projectsText.favorfit}
          highlights={favorfitHighlights}
          galleryItems={favorfitShots}
        />

        <FeaturedProjectSection
          id="project-keepay"
          project={projectsText.keepay}
          highlights={keepayHighlights}
          galleryItems={keepayShots}
          galleryClassName="gallery-grid-portrait"
        />

        <EnterpriseProjectsSection
          content={projectsText.enterprise}
          projects={enterpriseProjects}
        />

        <SkillsSection
          skillsContent={projectsText.skills}
          educationContent={projectsText.education}
          skills={skills}
          certifications={certifications}
        />
      </main>
    </div>
  );
}

export default App;
