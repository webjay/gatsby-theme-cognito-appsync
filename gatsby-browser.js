import Auth from '@aws-amplify/auth';

function authConfig(pluginOptions) {
  const {
    identityPoolId,
    userPoolId,
    userPoolWebClientId,
    region,
    cognito_domain,
    redirectSignIn,
    redirectSignOut,
  } = pluginOptions;
  const config = {
    identityPoolId,
    userPoolId,
    userPoolWebClientId,
    region,
    oauth: {
      domain: cognito_domain,
      redirectSignIn,
      redirectSignOut,
      responseType: 'code',
    },
  };
  Auth.configure(config);
}

function onClientEntry(_, pluginOptions) {
  authConfig(pluginOptions);
}

export { onClientEntry };
