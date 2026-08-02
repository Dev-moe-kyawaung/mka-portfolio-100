import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { projects } from '../../data/portfolioData.js';

/**
 * Projects with 6 cards, colored tags, demo + source links
 */
export default function Projects() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  const colorMap = {
    cyan: 'var(--cyan-400)',
    pink: 'var(--pink-400)',
    yellow: 'var(--yellow-400)',
  };

  return (
    <section ref={ref} className="projects-section">
      <div className={`projectsGrid glass \${visible ? 'show' : ''}`}>
        <h2>Projects</h2>
        
        <div className="masonry-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span 
                className="tag" 
                style={{ borderColor: colorMap[project.color] }}
              >
                {project.tag}
              </span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="burmese">{project.burmese}</span>
              
              <div className="cardActions">
                <a href={project.demo} className="btn" target="_blank">
                  Demo
                </a>
                <Link to={project.source} className="btn">
                  Source
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
