import { useRef, useState, useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter.js';
import { stats } from '../../data/portfolioData.js';

/**
 * Animated Counter Section with smooth increment on scroll into view
 */
export default function Stats() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const counts = {
    years: useCounter(10, isVisible),
    apps: useCounter(3000, isVisible),
    repos: useCounter(122, isVisible),
    sat: useCounter(100, isVisible),
  };

  return (
    <section ref={ref} className="stats-section">
      <div className="statsGrid glass">
        {stats.map((stat, idx) => {
          const countKey = ['years', 'apps', 'repos', 'sat'][idx];
          return (
            <div className="stat-card" key={stat.label}>
              <strong className="stat-value">
                {counts[countKey]}
                {stat.suffix}
              </strong>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-note">{stat.note}</span>
              <span className="stat-burmese">{stat.burmese}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
