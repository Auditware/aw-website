export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|html|mdx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
