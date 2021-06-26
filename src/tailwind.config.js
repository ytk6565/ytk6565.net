/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
// const { } = require('tailwindcss/defaultTheme')

const HTML_FONT_SIZE_DEFAULT = 16;
const HTML_FONT_SIZE_BASE = 10;

const rem = (size) =>
  size * (HTML_FONT_SIZE_BASE / HTML_FONT_SIZE_DEFAULT) + "rem";

module.exports = {
  mode: "jit",
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
      // sm: "640px",
      // md: "768px",
      // lg: "1024px",
      // xl: "1280px",
      // "2xl": "1536px",
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
      8: rem(0.8),
      16: rem(1.6),
      24: rem(2.4),
      32: rem(3.2),
      48: rem(4.8),
      64: rem(6.4),
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
      // xs: [rem(1.0), { lineHeight: 1.5 }],
      // sm: [rem(1.4), { lineHeight: 1.5 }],
      base: [rem(1.6), { lineHeight: 1.5 }],
      lg: [rem(2.4), { lineHeight: 1.2 }],
      xl: [rem(3.2), { lineHeight: 1.2 }],
      "2xl": [rem(4.0), { lineHeight: 1.2 }],
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
