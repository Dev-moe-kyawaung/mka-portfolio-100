import { useEffect, useState } from 'react';

/**
 * Custom cursor effect (pointer-following gradient dot)
 */
export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="customCursor"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}
