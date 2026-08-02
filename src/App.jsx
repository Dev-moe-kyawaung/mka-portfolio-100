import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import Cursor from './components/Cursor/Cursor.jsx';
import Preloader from './components/Preloader/Preloader.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import SocialPage from './pages/SocialPage.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Preloader />}
      {!loading && <Cursor />}
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/social" element={<SocialPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
