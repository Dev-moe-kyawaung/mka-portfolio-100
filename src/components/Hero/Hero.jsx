import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { socialLinks, techSpecialties } from '../../data/portfolioData.js';

/**
 * Hero Section with animated typing effect, rotating roles, smooth fade-up
 */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  // Rotate through 4 roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % techSpecialties.length);
      setTypedText('');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = techSpecialties[roleIndex];
    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex < currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [roleIndex]);

  return (
    <section ref={ref} className="hero">
      <div className="heroGlow" aria-hidden="true" />
      <div className="heroParticles" aria-hidden="true" />
      
      <div className={`heroCard glass \${visible ? 'show' : ''}`}>
        <p className="eyebrow">
          Professional Android Portfolio • SaaS Landing Experience
        </p>
        
        <h1 className="heroTitle">
          <span className="gradientText">MOE KYAW AUNG</span>
          <br />
          Android Senior Developer
        </h1>

        <div className="typing-container" aria-live="polite">
          <p className="typing">{typedText}</p>
          <span className="cursor">|</span>
        </div>

        <p className="heroText">
          Android Developer with nearly 12 years of hands-on experience building 
          secure, scalable, and user-friendly mobile applications. Strong in Kotlin 
          and modern Jetpack development (Compose, ViewModel, Room), Firebase 
          integration, and REST API consumption.
        </p>

        <div className="heroBtns">
          <Link to="/contact" className="btn primary" aria-label="Contact Moe Kyaw Aung">
            Contact Me
          </Link>
          <Link to="/projects" className="btn" aria-label="View portfolio projects">
            View Projects
          </Link>
        </div>

        <div className="socialRow" role="list" aria-label="Social media links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon"
              aria-label={`\${social.label} profile`}
              title={social.label}
            >
              <i className={`fa \${social.icon}`} />
              <span className="burmese">{social.burmese}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
