/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'houzeo-blue': '#2563eb',
      },
      screens: {
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
}