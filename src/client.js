import { ApolloLink, ApolloClient, InMemoryCache } from '@apollo/client';
import Auth from '@aws-amplify/auth';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

function jwtToken() {
  return Auth.currentSession().then((session) => {
    if (session === undefined) return;
    return session.getIdToken().getJwtToken();
  });
}

const config = {
  url: process.env.GATSBY_GRAPHQL_ENDPOINT,
  region: process.env.GATSBY_REGION,
  auth: {
    type: 'AMAZON_COGNITO_USER_POOLS',
    jwtToken,
  },
};

const link = ApolloLink.from([
  createAuthLink(config),
  createSubscriptionHandshakeLink(config),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
