/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /translate-x-\[\d+px\]/, // Keep all classes matching this pattern
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
