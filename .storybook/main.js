module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "../preset.js",
      options: {
        prefix: "template-react-component-library",
      },
    },
    "@storybook/addon-essentials",
  ],
};
