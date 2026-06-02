/** Production build config — mirrors the inline tailwind.config used by the Play CDN. */
module.exports = {
  content: ['./index.html', './about.html', './contact.html', './services/**/*.html', './locations/**/*.html'],
  safelist: ['hidden'], // toggled by lead-form.js; also present statically
  theme: {
    extend: {
      colors: {
        bg: '#0A0E18', 'bg-elev': '#0E1422', surface: '#131B2D', 'surface-2': '#1A2438',
        ink: '#F4F7FB', 'ink-soft': '#A9B4C6', 'ink-mute': '#6E7B92',
        paper: '#EEF3F9', 'paper-2': '#FFFFFF',
        blue: { DEFAULT: '#1E88C9', bright: '#41A6E4', deep: '#12557F' },
        flame: { DEFAULT: '#E85A2A', bright: '#F77F37', deep: '#BC3D14' },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      spacing: { '4.5': '1.125rem' },
    },
  },
};
