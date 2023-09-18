/* eslint-env es6 */
/* eslint-disable */
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'ftx-tooltip/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'ftx-forms/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'ftx-ftm/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      width: {
        42: '10.5rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ],
};
