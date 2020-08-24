# gatsby-theme-cognito-appsync

## Install

    yarn add gatsby-theme-cognito-appsync

## Configuration

In `.env.development`:

    GATSBY_REGION=???
    GATSBY_COGNITO_USER_POOL_ID=???
    GATSBY_COGNITO_APP_CLIENT_ID=???
    GATSBY_COGNITO_DOMAIN=???.auth.???.amazoncognito.com
    GATSBY_URL=http://localhost:8000/
    GATSBY_GRAPHQL_ENDPOINT=https://???.appsync-api.???.amazonaws.com/graphql
    GATSBY_AUTH_TYPE=AMAZON_COGNITO_USER_POOLS

In `gatsby-config.js`:

Add `gatsby-theme-cognito-appsync` to `plugins`.

In `gatsby-browser.js`:

    import React from 'react';
    import PropTypes from 'prop-types';
    import { AuthWrap } from 'gatsby-theme-cognito-appsync';

    function wrapRootElement({ element }) {
      return (
        <AuthWrap>
          {element}
        </AuthWrap>
      );
    }

    wrapRootElement.propTypes = {
      element: PropTypes.element.isRequired,
    };

    export { wrapRootElement };

For `useQuery`:

    import { client } from 'gatsby-theme-cognito-appsync';
