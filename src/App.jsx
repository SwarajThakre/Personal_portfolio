import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import AllProjects from './page/AllProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    return path === '/allproject' || path === '/all-projects'
      ? 'all-projects'
      : 'home';
  });

  useEffect(() => {
    const newPath = currentPage === 'all-projects' ? '/allproject' : '/';
    if (window.location.pathname !== newPath) {
      window.history.replaceState(null, '', newPath);
    }

    if (currentPage === 'all-projects') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [currentPage]);

  const handleNavigateSection = (sectionId) => {
    setCurrentPage('home');

    requestAnimationFrame(() => {
      if (sectionId === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const renderPage = () => {
    if (currentPage === 'all-projects') {
      return <AllProjects />;
    }

    return (
      <>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects onViewAll={() => setCurrentPage('all-projects')} />
        <Contact />
      </>
    );
  };

  return (
    <>
      <Header onNavigateSection={handleNavigateSection} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
