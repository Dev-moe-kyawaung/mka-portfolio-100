import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { testimonials } from '../../data/portfolioData.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Testimonial carousel/slider with auto-play
 */
export default function Testimonials() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="testimonials-section">
      <div className={`testimonialsCarousel glass \${visible ? 'show' : ''}`}>
        <h2>Testimonials</h2>
        
        <div className="carousel-track">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`carousel-slide \${idx === current ? 'active' : ''}`}
            >
              <img src={t.avatar} alt={t.name} className="avatar" />
              <div className="slideContent">
                <p>{t.text}</p>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-prev" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft />
        </button>
        <button className="carousel-next" onClick={next} aria-label="Next testimonial">
          <ChevronRight />
        </button>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot \${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial \${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
