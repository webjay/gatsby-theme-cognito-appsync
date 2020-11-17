# gatsby-theme-cognito-appsync

## Install

    yarn add gatsby-theme-cognito-appsync

## Configuration

In `.env.development`:

    AWS_REGION=???
    AWS_COGNITO_USER_POOL_ID=???
    AWS_COGNITO_APP_CLIENT_ID=???
    AWS_COGNITO_DOMAIN=???.auth.???.amazoncognito.com
    AWS_GRAPHQL_ENDPOINT=https://???.appsync-api.???.amazonaws.com/graphql
    URL_REDIRECT_SIGNIN=http://localhost:8000/dashboard/
    URL_REDIRECT_SIGNOUT=http://localhost:8000/

In `gatsby-config.js`:

Add `gatsby-theme-cognito-appsync` to `plugins`.

    {
      resolve: 'gatsby-theme-cognito-appsync',
      options: {
        userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
        userPoolWebClientId: process.env.AWS_COGNITO_APP_CLIENT_ID,
        region: process.env.AWS_REGION,
        cognito_domain: process.env.AWS_COGNITO_DOMAIN,
        redirectSignIn: process.env.URL_REDIRECT_SIGNIN,
        redirectSignOut: process.env.URL_REDIRECT_SIGNOUT,
        graphql_endpoint: process.env.AWS_GRAPHQL_ENDPOINT,
        graphql_apikey: process.env.AWS_GRAPHQL_APIKEY,
      },
    },

For `useQuery`:

    import { client } from 'gatsby-theme-cognito-appsync';
