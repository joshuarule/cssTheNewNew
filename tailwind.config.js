module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 0%',
      initial: '0 1 auto',
      auto: '1 1 auto',
      none: 'none',
      '2': '2 2 0%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
