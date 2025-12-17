import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 60px hsla(var(--shadowRgb) / .35)',
        glow: '0 0 0 1px hsla(0 0% 100% / .08), 0 20px 70px hsla(var(--accent) / .18)',
      },
      backdropBlur: {
        glass: '18px',
      },
      borderColor: {
        glass: 'hsla(0 0% 100% / .10)',
      },
    },
  },
};

export default config;

