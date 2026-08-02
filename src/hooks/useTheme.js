import { useEffect, useState } from 'react';

/**
 * Dark/Light mode toggle with localStorage persistence
 * @returns {{theme: string, setTheme: function}}
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, setTheme: toggleTheme };
}
