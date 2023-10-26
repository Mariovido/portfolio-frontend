import About from '../components/Portfolio/About';
import Experiences from '../components/Portfolio/Experiences';
import Header from '../components/Portfolio/Header';
import Educations from '../components/Portfolio/Educations';
import ScrollToHashElement from '../components/shared/Navigation/ScrollHashElement';
import Footer from '../components/Portfolio/Footer';
import Cursor from '../components/shared/Common/Cursor';
import Skills from '../components/Portfolio/Skills';
import Projects from '../components/Portfolio/Projects';

import './styles/Portfolio.scss';

function Portfolio() {
  return (
    <>
      <Cursor />
      <div className="portfolio">
        <ScrollToHashElement />
        <Header />
        <main className="main">
          <About />
          <Experiences />
          <Educations />
          <Projects />
          <Skills />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default Portfolio;
