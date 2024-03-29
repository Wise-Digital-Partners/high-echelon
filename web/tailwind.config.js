const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        DEFAULT: "77rem",
      },
    },
    fontFamily: {
      heading: ['"Montserrat", serif'],
      display: ['"Lora", sans-serif'],
      body: ['"Montserrat", sans-serif'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
      },
      borderRadius: {
        "4xl": "1.875rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "2xl": "0px 2px 60px rgba(0, 0, 0, 0.05)",
        "3xl": "0px 2px 60px rgba(0, 0, 0, 0.12)",
        "4xl":
          " 0px 0px 16px rgba(106, 188, 68, 0.35), 0px 2px 60px rgba(0, 0, 0, 0.12)",
        "5xl": "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "6xl": "0px 2px 40px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        gray: {
          900: "#1A1A1A",
          800: "#333333",
          700: "#4D4D4D",
          600: "#666666",
          500: "#808080",
          400: "#999999",
          300: "#B2B2B2",
          200: "#CCCCCC",
          100: "#DCE5E4",
          50: "#FAFCFC",
        },
        primary: {
          // 900: "",
          // 800: "",
          // 700: "",
          // 600: "",
          500: "#CEA13C",
          400: "#D2B15E",
          // 300: "",
          200: "#FFFFFF",
          100: "#CEA13C",
          50: "#F1F9F5",
        },
        secondary: {
          900: "",
          800: "",
          700: "",
          600: "",
          500: "",
          400: "#152636",
          300: "#666666",
          200: "",
          100: "",
          50: "",
        },
      },
      fontSize: {
        "2xs": ["0.625rem", "1rem"],
        sm: ["0.875rem", "1.375rem"],
        base: ["1rem", "1.75rem"],
        lg: ["1.125rem", "1.5rem"],
        xl: ["1.25rem", "2rem"],
        "2xl": ["1.375rem", "2rem"],
        "3xl": ["1.5rem", "2.125rem"],
        "4xl": ["1.875rem", "2.286rem"],
        "4xl-x": ["2.25rem", "2.5rem"],
        "5xl": ["2.5rem", "3.048rem"],
        "6xl": ["3rem", "3.657rem"],
        "7xl": ["3.563rem", "4.063rem"],
        // "mobile-lg": ["rem", "rem"],
        // "mobile-xl": ["rem", "rem"],
        // "mobile-2xl": ["rem", "rem"],
        // "mobile-3xl": ["rem", "rem"],
        // "mobile-4xl": ["rem", "rem"],
        "mobile-5xl": ["2rem", "2.438rem"],
        "mobile-6xl": ["2.125rem", "3rem"],
        "mobile-7xl": ["2.25rem", "2.5rem"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      letterSpacing: {
        wide: "0.03em",
        wider: "0.05em",
        widest: "0.07em",
      },
      ringWidth: {
        3: "3px",
      },
      screens: {
        "2xs": "375px",
        xs: "480px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
