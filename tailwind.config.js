/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          soft: '#11111a',
          card: '#15151f',
          border: '#22222e',
        },
        accent: {
          DEFAULT: '#7c3aed',
          cyan: '#22d3ee',
          pink: '#ec4899',
          emerald: '#10b981',
        },
        ink: {
          DEFAULT: '#e6e6f0',
          dim: '#9ca3af',
          muted: '#6b7280',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.06) 1px, transparent 1px)",
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18), transparent 60%)',
        'aurora':
          'linear-gradient(135deg, #7c3aed 0%, #22d3ee 50%, #ec4899 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 58, 237, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.45)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
