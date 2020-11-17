import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache,
} from '@apollo/client';
import { createAuthLink } from 'aws-appsync-auth-link';

function getClient() {
  if (process.env.GATSBY_GRAPHQL_APIKEY === undefined) return;
  const config = {
    auth: {
      type: 'API_KEY',
      apiKey: process.env.GATSBY_GRAPHQL_APIKEY,
    },
  };
  return new ApolloClient({
    link: ApolloLink.from([
      createAuthLink(config),
      new HttpLink({ uri: process.env.GATSBY_GRAPHQL_ENDPOINT }),
    ]),
    cache: new InMemoryCache(),
  });
}

export default getClient();
