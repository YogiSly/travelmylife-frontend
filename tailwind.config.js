// tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
   theme: {
      extend: {
        colors: {
          bgtransparent: 'rgba(61, 61, 61, .4);',
          border: '#CCCCCC',
          btnblue: '#0057d9'
        },
      }
    },
  variants: {
  },
  plugins: [],
};
