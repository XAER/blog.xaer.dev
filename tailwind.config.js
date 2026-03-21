/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-text-primary)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        subtle: 'var(--color-border)',
        'subtle-hi': 'var(--color-border-hover)',
        'subtle-accent': 'var(--color-border-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        'accent-dim2': 'var(--color-accent-dim2)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      maxWidth: {
        content: '740px',
      },
    },
  },
  plugins: [],
}
