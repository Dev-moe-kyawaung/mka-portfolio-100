import { Link } from 'react-router-dom';
import { navLinks, socialLinks, organization } from '../../data/portfolioData.js';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Fat footer with newsletter, links, map, social icons
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div className="footerBrand">
          <Link to="/" className="brand">
            <span className="brandMark">MKA</span>
            <div>
              <strong>Moe-Kyaw-Aung-Portfolio 100</strong>
              <p>⭐MOE KYAW AUNG ⭐ANDROID SENIOR DEVELOPER</p>
            </div>
          </Link>
          <p>{organization.burmese_name}</p>
        </div>

        <div className="footerLinks">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerContact">
          <h4>Contact</h4>
          <ul>
            <li>
              <MapPin size={16} />
              <span>{organization.location}</span>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:\${organization.email}`}>{organization.email}</a>
            </li>
            <li>
              <Phone size={16} />
              <a href={`tel:\${organization.phone}`}>{organization.phone}</a>
            </li>
          </ul>
        </div>

        <div className="footerNewsletter">
          <h4>Newsletter</h4>
          <p>Get updates on new projects and articles</p>
          <form className="newsletterForm">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn primary">Subscribe</button>
          </form>
        </div>

        <div className="footerSocial">
          <h4>Follow</h4>
          <div className="socialRow">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <i className={`fa \${s.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footerMap">
        <iframe
          title={`Map showing \${organization.location}`}
          src={`https://www.google.com/maps?q=\${organization.location}&output=embed`}
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          aria-label="Google Map"
        />
      </div>

      <div className="footerCopyright">
        <p>
          © {new Date().getFullYear()} Moe Kyaw Aung. All rights reserved.
          <span className="burmese">© {new Date().getFullYear()} မိုးကျဲအောင်</span>
        </p>
      </div>
    </footer>
  );
}
