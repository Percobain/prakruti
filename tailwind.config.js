/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        beige: '#F5F5DC',
        olive: '#708238',
        pink: '#F4C2C2',
      },
      fontFamily: {
        hatton: ['RoxboroughCF', 'serif'],
        luxury: ['RoxboroughCF', 'serif'],
        modern: ['RoxboroughCF', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}