import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks } from '../../data/portfolioData.js';
import { useTheme } from '../../hooks/useTheme.js';

/**
 * Sticky Navbar with glow effect, mobile hamburger, Myanmar labels
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`navbar \${scrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link to="/" className="brand" aria-label="Homepage">
        <span className="brandMark">MKA</span>
        <div>
          <strong>Moe-Kyaw-Aung-Portfolio 100</strong>
          <p>⭐MOE KYAW AUNG ⭐ANDROID SENIOR DEVELOPER</p>
        </div>
      </Link>

      <nav className={`navlinks \${open ? 'open' : ''}`} aria-label="Main menu">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
            aria-current={location.pathname === link.to ? 'page' : undefined}
          >
            {link.label}
            <span className="burmese">{link.burmese}</span>
          </Link>
        ))}
      </nav>

      <div className="actions">
        <button
          onClick={setTheme}
          aria-label={`Switch to \${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="theme-toggle"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
