import { useEffect, useState } from 'react';

/**
 * Scroll-triggered fade-in animation using Intersection Observer
 * @param {React.RefObject} ref - DOM element reference
 * @returns {boolean} visible state
 */
export function useScrollReveal(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // Trigger once
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}
