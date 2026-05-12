/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ess: {
          gold: '#D4AF37',
          orange: '#E86020',
          navy: '#181818',
          ink: '#111111',
          abyss: '#080808',
          charcoal: '#222222',
          silver: '#C8CDD3'
        }
      },
      boxShadow: {
        glow: '0 30px 90px -35px rgba(0, 0, 0, 0.6)'
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out forwards'
      }
    }
  },
  plugins: []
};
