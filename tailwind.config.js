/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dashboard specific colors
        dashboard: {
          bg: 'var(--dashboard-bg)',
          card: 'var(--dashboard-card)',
          border: 'var(--dashboard-border)',
        },
        // Chart colors for consistent theming
        chart: {
          primary: '#3b82f6',
          secondary: '#10b981',
          accent: '#f59e0b',
          danger: '#ef4444',
          warning: '#f97316',
          info: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      gridTemplateColumns: {
        'dashboard': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [
    // Add custom utilities for dashboard
    function({ addUtilities }) {
      addUtilities({
        '.dashboard-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
        },
        '.chart-container': {
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '200px',
        },
        '.widget-shadow': {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        '.cursor-pointer': {
          cursor: 'pointer',
        },
      });
    },
  ],
};
