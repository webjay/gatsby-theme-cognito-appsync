import Amplify from 'aws-amplify';
import { AUTH_TYPE } from 'aws-appsync';

const config = {
  Auth: {
    userPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.GATSBY_COGNITO_APP_CLIENT_ID,
    region: process.env.GATSBY_REGION,
  },
  oauth: {
    domain: process.env.GATSBY_COGNITO_DOMAIN,
    redirectSignIn: process.env.GATSBY_URL,
    redirectSignOut: process.env.GATSBY_URL,
    responseType: 'code',
  },
  aws_appsync_graphqlEndpoint: process.env.GATSBY_GRAPHQL_ENDPOINT,
  aws_appsync_authenticationType: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  aws_appsync_region: process.env.GATSBY_REGION,
};

Amplify.configure(config);
