const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontFamily: {
      logo: ["Raleway"],
      body: ["Roboto"],
    },
  },

  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
