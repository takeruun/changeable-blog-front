const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public'],
  sassOptions: {
    includePaths: [path.join(__dirname, '../styles')]
  },
  webpackFinal: async (config) => {
    // storybookで絶対パスimportを可能にする設定
    config.resolve.alias['@variable'] = path.resolve(
      __dirname,
      '../styles/variable.scss'
    );
    config.resolve.alias['styles'] = path.resolve(__dirname, '../styles');

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
};
