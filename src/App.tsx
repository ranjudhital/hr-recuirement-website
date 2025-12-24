import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ForEmployers from './components/ForEmployers';
import ForCandidates from './components/ForCandidates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="employers">
          <ForEmployers scrollToSection={scrollToSection} />
        </section>
        
        <section id="candidates">
          <ForCandidates scrollToSection={scrollToSection} />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
