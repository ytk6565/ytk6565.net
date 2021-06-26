/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
// const { } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      "src/components/**/*.vue",
      "src/components/**/*.tsx",
      "src/layouts/**/*.vue",
      "src/pages/**/*.vue",
      "src/plugins/**/*.js",
      "src/nuxt.config.js",
      // TypeScript
      "src/plugins/**/*.ts",
      "src/nuxt.config.ts",
    ],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // lightbrown: 'rgb(249, 245, 241)',
      black: "rgb(17, 17, 17)",
      white: "rgb(255, 254, 252)",
      gray: "rgba(0, 0, 0, 0.6)",
      // red: 'rgb(225, 98, 89)',
      // pink: 'rgb(253, 245, 242)',
    },
    spacing: {
      px: "1px",
      0: "0px",
      1: "0.1rem",
      2: "0.2rem",
      4: "0.4rem",
      5: "0.5rem",
      8: "0.8rem",
      10: "1rem",
      12: "1.2rem",
      14: "1.4rem",
      16: "1.6rem",
      20: "2rem",
      24: "2.4rem",
      28: "2.8rem",
      32: "3.2rem",
      36: "3.6rem",
      40: "4rem",
      48: "4.8rem",
      64: "6.4rem",
      72: "7.2rem",
      80: "8rem",
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    fontSize: {
      xs: ["1.2rem", { lineHeight: "1.6rem" }],
      sm: ["1.4rem", { lineHeight: "2rem" }],
      base: ["1.6rem", { lineHeight: "2.4rem" }],
      lg: ["1.8rem", { lineHeight: "2.8rem" }],
      xl: ["2rem", { lineHeight: "2.8rem" }],
      "2xl": ["2.4rem", { lineHeight: "3.2rem" }],
      "3xl": ["3rem", { lineHeight: "3.6rem" }],
      "4xl": ["3.6rem", { lineHeight: "4rem" }],
      "5xl": ["4.8rem", { lineHeight: "1" }],
      "6xl": ["6rem", { lineHeight: "1" }],
      "7xl": ["7.2rem", { lineHeight: "1" }],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
    },
    minHeight: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    accessibility: false,
    alignContent: false,
    fill: false,
    fontFamily: false,
    fontSmoothing: false,
    placeholderColor: false,
    placeholderOpacity: false,
    rotate: false,
    scale: false,
    skew: false,
    space: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textOpacity: false,
    textTransform: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    wordBreak: false,
  },
};
