function handlePluginOptions({
  userPoolId,
  userPoolWebClientId,
  region,
  url,
  cognito_domain,
  graphql_endpoint,
}) {
  process.env.GATSBY_COGNITO_USER_POOL_ID = userPoolId;
  process.env.GATSBY_COGNITO_APP_CLIENT_ID = userPoolWebClientId;
  process.env.GATSBY_REGION = region;
  process.env.GATSBY_URL = url;
  process.env.GATSBY_COGNITO_DOMAIN = cognito_domain;
  process.env.GATSBY_GRAPHQL_ENDPOINT = graphql_endpoint;
}

function onPreInit(_, pluginOptions) {
  handlePluginOptions(pluginOptions);
}

exports.onPreInit = onPreInit;
