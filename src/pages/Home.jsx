import Hero from '../components/Hero/Hero.jsx';
import Stats from '../components/Stats/Stats.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Services from '../components/Services/Services.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import FAQ from '../components/FAQ/FAQ.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Contact from '../components/Contact/Contact.jsx';

/**
 * Homepage with all sections (10+ sections)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Gallery />
      <Contact />
    </>
  );
}
