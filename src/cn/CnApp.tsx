import NavigationCn from './sections/NavigationCn';
import AboutCn from './sections/AboutCn';
import EducationCn from './sections/EducationCn';
import ResearchCn from './sections/ResearchCn';
import PublicationsCn from './sections/PublicationsCn';
import ProjectsCn from './sections/ProjectsCn';
import AwardsCn from './sections/AwardsCn';
import FooterCn from './sections/FooterCn';

function CnApp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationCn />

      <main className="pt-16">
        <AboutCn />
        <div className="border-t border-gray-200">
          <EducationCn />
        </div>
        <div className="border-t border-gray-200 bg-white">
          <ResearchCn />
        </div>
        <div className="border-t border-gray-200">
          <PublicationsCn />
        </div>
        <div className="border-t border-gray-200 bg-white">
          <ProjectsCn />
        </div>
        <div className="border-t border-gray-200">
          <AwardsCn />
        </div>
      </main>

      <FooterCn />
    </div>
  );
}

export default CnApp;
