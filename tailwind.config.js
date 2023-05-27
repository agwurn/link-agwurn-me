/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'googlefont': ['"Noto Sans TC"', 'sans-serif'],
        'googleDigit' : ['"Press Start 2P"', 'cursive'],
        'googleRoboto': ['"Roboto Mono"', 'monospace']
      },
      fontSize: {
        // xxs: '20rem',
      }
    },
  },
  plugins: [],
}

