import Auth from '@aws-amplify/auth';

const config = {
  userPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.GATSBY_COGNITO_APP_CLIENT_ID,
  region: process.env.GATSBY_REGION,
  oauth: {
    domain: process.env.GATSBY_COGNITO_DOMAIN,
    redirectSignIn: process.env.GATSBY_URL,
    redirectSignOut: process.env.GATSBY_URL,
    responseType: 'code',
  },
};

Auth.configure(config);
