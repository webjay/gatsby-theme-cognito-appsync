# gatsby-theme-cognito-appsync

## Install

    yarn add gatsby-theme-cognito-appsync

## Configuration

In `.env.development`:

    URL=http://localhost:8000/
    AWS_REGION=???
    AWS_COGNITO_USER_POOL_ID=???
    AWS_COGNITO_APP_CLIENT_ID=???
    AWS_COGNITO_DOMAIN=???.auth.???.amazoncognito.com
    AWS_GRAPHQL_ENDPOINT=https://???.appsync-api.???.amazonaws.com/graphql

In `gatsby-config.js`:

Add `gatsby-theme-cognito-appsync` to `plugins`.

    {
      resolve: 'gatsby-theme-cognito-appsync',
      options: {
        userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
        userPoolWebClientId: process.env.AWS_COGNITO_APP_CLIENT_ID,
        region: process.env.AWS_REGION,
        url: process.env.URL,
        cognito_domain: process.env.AWS_COGNITO_DOMAIN,
        graphql_endpoint: process.env.AWS_GRAPHQL_ENDPOINT,
      },
    },

For `useQuery`:

    import { client } from 'gatsby-theme-cognito-appsync';
