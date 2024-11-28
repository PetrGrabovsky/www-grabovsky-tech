import type { Config } from 'tailwindcss';

export default {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-background': '#080808',
      },
      backgroundImage: {
        'white-carbon': 'url("/white-carbon.png")',
      },
    },
  },
  plugins: [],
} satisfies Config;
