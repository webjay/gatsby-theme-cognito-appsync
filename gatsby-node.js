const { resolve } = require('path');

function onCreateWebpackConfig({ getConfig, actions: { setWebpackConfig } }) {
  const config = getConfig();
  setWebpackConfig({
    resolve: {
      alias: {
        ...config.resolve.alias,
        'react': resolve('./node_modules/react'),
        'react-dom': resolve('./node_modules/react-dom'),
      },
    },
  });
}

function handlePluginOptions({ region, graphql_endpoint }) {
  process.env.GATSBY_REGION = region;
  process.env.GATSBY_GRAPHQL_ENDPOINT = graphql_endpoint;
}

function onPreInit(_, pluginOptions) {
  handlePluginOptions(pluginOptions);
}

exports.onCreateWebpackConfig = onCreateWebpackConfig;
exports.onPreInit = onPreInit;
