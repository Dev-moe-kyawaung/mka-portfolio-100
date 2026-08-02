import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { skills } from '../../data/portfolioData.js';

/**
 * Skills with scroll-triggered animated progress bars
 */
export default function Skills() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} className="skills-section">
      <div className={`skillsGrid glass \${visible ? 'show' : ''}`}>
        <h2>Skills & Expertise</h2>
        
        <div className="bars">
          {skills.map((skill) => (
            <div className="bar" key={skill.name}>
              <label>
                {skill.name}
                <span className="burmese">{skill.burmese}</span>
              </label>
              <div className="bar-track">
                <span 
                  className="bar-fill" 
                  style={{ width: `\${skill.percent}%` }}
                  aria-valuenow={skill.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                />
              </div>
              <span className="bar-percent">{skill.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
