import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Built with <span>Passion</span> &bull; Preparing for <span>GSoC</span> &bull; {new Date().getFullYear()} Abhishek
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
