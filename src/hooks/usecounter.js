import { useEffect, useState } from 'react';

/**
 * Animated counter that increments when visible
 * @param {number} end - Target number
 * @param {boolean} active - Start counting when true
 * @returns {number} current count
 */
export function useCounter(end, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || count === end) return;

    const duration = 1400; // ms
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [active, end, count]);

  return count;
}
