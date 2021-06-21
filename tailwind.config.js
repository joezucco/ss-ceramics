module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      tutu: {
        50: "#fffeff",
        100: "#fffeff",
        200: "#fffbfe",
        300: "#fff9fd",
        400: "#fff5fc",
        500: "#fff0fb",
        600: "#e6d8e2",
        700: "#bfb4bc",
        800: "#999097",
        900: "#7d767b",
      },
      geraldine: {
        50: "#fff9f9",
        100: "#fff3f3",
        200: "#ffe1e1",
        300: "#ffcece",
        400: "#ffaaaa",
        500: "#ff8585",
        600: "#e67878",
        700: "#bf6464",
        800: "#995050",
        900: "#7d4141",
      },
    },
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
