import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': [
          'Permanent Marker',
          ...defaultTheme.fontFamily.sans,
        ],
        comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
