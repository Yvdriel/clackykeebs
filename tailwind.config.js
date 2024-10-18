/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["CormorantGaramond", "sans-serif"],
      },
      colors: {
        'primary': '#F77B6E',
        'primary-text': '#2c3d50',
      },
    },
    fontFamily: {
      harman: 'Harman-Sans, "Harman Sans"',
    },
  },
  plugins: [require("flowbite/plugin")],
};
