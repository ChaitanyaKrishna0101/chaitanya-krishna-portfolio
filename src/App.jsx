import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="noise" />
      <div className="scan-line" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <VideoSection />
        <Projects />
        <Skills />
        <Experience />
        <AIChat />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
