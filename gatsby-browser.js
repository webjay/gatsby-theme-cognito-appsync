import Auth from '@aws-amplify/auth';

function authConfig(pluginOptions) {
  const {
    userPoolId,
    userPoolWebClientId,
    region,
    url,
    cognito_domain,
  } = pluginOptions;
  const config = {
    userPoolId,
    userPoolWebClientId,
    region,
    oauth: {
      domain: cognito_domain,
      redirectSignIn: url,
      redirectSignOut: url,
      responseType: 'code',
    },
  };
  Auth.configure(config);
}

function onClientEntry(_, pluginOptions) {
  authConfig(pluginOptions);
}

export { onClientEntry };
