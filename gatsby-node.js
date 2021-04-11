const { resolve } = require('path');

function onCreateWebpackConfig({ getConfig, actions: { setWebpackConfig } }) {
  const { resolve: { alias } } = getConfig();
  setWebpackConfig({
    resolve: {
      alias: {
        ...alias,
        'react': resolve('./node_modules/react'),
        'react-dom': resolve('./node_modules/react-dom'),
        '@apollo/client': resolve('./node_modules/@apollo/client'),
        'graphql': resolve('./node_modules/graphql'),
      },
    },
  });
}

function handlePluginOptions({ region, graphql_endpoint, graphql_apikey }) {
  process.env.GATSBY_REGION = region;
  process.env.GATSBY_GRAPHQL_ENDPOINT = graphql_endpoint;
  process.env.GATSBY_GRAPHQL_APIKEY = graphql_apikey;
}

function onPreInit(_, pluginOptions) {
  handlePluginOptions(pluginOptions);
}

exports.onCreateWebpackConfig = onCreateWebpackConfig;
exports.onPreInit = onPreInit;
