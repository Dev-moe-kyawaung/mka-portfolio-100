import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

/**
 * Advanced About Section with Timeline, Avatar Ring, Stats
 */
export default function About() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  const timeline = [
    { year: '2013', event: 'Started Android development with Java' },
    { year: '2016', event: 'Transitioned to Kotlin, adopted MVVM' },
    { year: '2018', event: 'Scaled to modular architecture, Clean Architecture' },
    { year: '2020', event: 'Jetpack Compose adoption, Material Design 3' },
    { year: '2022', event: 'Advanced CI/CD, Firebase, multi-language support' },
    { year: '2024', event: 'Kotlin Multiplatform (KMM), Backend integration' },
  ];

  return (
    <section ref={ref} className="about-section">
      <div className={`aboutGrid glass \${visible ? 'show' : ''}`}>
        <div className="avatarContainer">
          <div className="avatarRing">
            <div className="rotatingGradient" />
            <img
              src="https://gravatar.com/moekyawaung13721"
              alt="Moe Kyaw Aung - Android Senior Developer"
              className="avatar"
            />
          </div>
          <div className="socialRings" aria-hidden="true">
            <i className="fa fa-github" />
            <i className="fa fa-google" />
            <i className="fa fa-telegram" />
            <i className="fa fa-linkedin" />
          </div>
        </div>

        <div className="aboutContent">
          <h2>About Me</h2>
          <p>
            Android Developer with nearly <strong>12 years of hands-on experience</strong> 
            building secure, scalable, and user-friendly mobile applications. Strong in 
            Kotlin and modern Jetpack development (Compose, ViewModel, Room), Firebase 
            integration, and REST API consumption.
          </p>
          <p>
            I focus on clean architecture, maintainable code, and practical security. 
            Comfortable delivering features end-to-end—from UI to networking, local 
            caching, testing, and release-ready builds.
          </p>

          <div className="skills-tags">
            <span>Kotlin</span>
            <span>Jetpack Compose</span>
            <span>MVVM</span>
            <span>Firebase</span>
            <span>CI/CD</span>
            <span>Room</span>
            <span>Retrofit</span>
            <span>Hilt</span>
          </div>

          <div className="timeline">
            <h3>Experience Timeline</h3>
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
