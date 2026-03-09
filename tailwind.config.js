/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        'navy-800': '#1e293b',
        'navy-700': '#334155',
        gold: '#d4af37',
        'gold-light': '#e8c84a',
        'gold-dark': '#b8960a',
        cream: '#fafaf8',
        'warm-gray': '#f8f7f4',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-left': 'slideLeft 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212,175,55,0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'gold': '0 8px 32px rgba(212,175,55,0.25)',
        'navy': '0 8px 32px rgba(15,23,42,0.15)',
        'product': '0 4px 24px rgba(0,0,0,0.08)',
        'product-hover': '0 16px 48px rgba(0,0,0,0.15)',
        'luxury': '0 25px 60px rgba(15,23,42,0.12)',
      },
    },
  },
  plugins: [],
}
