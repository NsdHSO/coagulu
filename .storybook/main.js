const config = {
  stories: [
    '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../ftx-tooltip/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../ftx-forms/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: [{ from: './../src/assets', to: '/assets' }],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
