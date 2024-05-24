/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../public/style.css",
    "../views/index.ejs" ,
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
// const plugin = require("tailwindcss/plugin");

// module.exports = {
//   theme: {
//     extend: {
//       textShadow: {
//         sm: "0 1px 2px var(--tw-shadow-color)",
//         DEFAULT: "0 2px 4px var(--tw-shadow-color)",
//         lg: "0 8px 16px var(--tw-shadow-color)",
//       },
//     },
//   },
//   plugins: [
//     plugin(function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           "text-shadow": (value) => ({
//             textShadow: value,
//           }),
//         },
//         { values: theme("textShadow") }
//       );
//     }),
//   ],
// };
