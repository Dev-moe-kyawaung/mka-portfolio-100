/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: { 400: '#00f5ff', 500: '#00e0ff', 600: '#00c9ff', 700: '#00b2ff' },
        pink: { 400: '#ff4fd8', 500: '#ff38d8', 600: '#ff1fd8', 700: '#ff06d8' },
        yellow: { 400: '#ffe84d', 500: '#ffe04d', 600: '#ffd84d', 700: '#ffc04d' },
      },
      fontFamily: { 
        sans: ['Inter', 'system-ui', 'sans-serif'], 
        orbitron: ['Orbitron', 'sans-serif'] 
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(90deg, #00f5ff, #ff4fd8, #ffe84d)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.7s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,245,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,245,255,0.6)' }
        }
      }
    },
  },
  plugins: [],
};
