import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { CtaBand } from './components/CtaBand/CtaBand';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ProfileProvider, useProfile } from './hooks/useProfile';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useReveal } from './hooks/useReveal';

function PortfolioPage() {
  useReveal();
  const { activeProfile } = useProfile();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        {activeProfile === 'developer' && (
          <>
            <Projects />
            <CtaBand />
          </>
        )}
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProfileProvider>
          <PortfolioPage />
        </ProfileProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
