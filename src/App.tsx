import Navigation from './sections/Navigation';
import About from './sections/About';
import Education from './sections/Education';
import Research from './sections/Research';
import Publications from './sections/Publications';
import Projects from './sections/Projects';
import Awards from './sections/Awards';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        <About />
        <div className="border-t border-gray-200">
          <Education />
        </div>
        <div className="border-t border-gray-200 bg-white">
          <Research />
        </div>
        <div className="border-t border-gray-200">
          <Publications />
        </div>
        <div className="border-t border-gray-200 bg-white">
          <Projects />
        </div>
        <div className="border-t border-gray-200">
          <Awards />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
