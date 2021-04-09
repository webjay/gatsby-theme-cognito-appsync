import Auth from '@aws-amplify/auth';

function authConfig({
  userPoolId,
  userPoolWebClientId,
  region,
  cognito_domain: domain,
  redirectSignIn,
  redirectSignOut,
}) {
  const config = {
    userPoolId,
    userPoolWebClientId,
    region,
    oauth: {
      domain,
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
