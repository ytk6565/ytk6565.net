/** @type {import('tailwindcss').Config} */

module.exports = {
  ...require('@ytk6565.net/tailwindcss/config'),
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
